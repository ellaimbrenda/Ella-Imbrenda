let player, playerX, playerY 
let ball, ballX, ballY, ballSpeed 
let goalie, goalieX, goalieY
let goalX, goalY
let ballMoving = false

let playerImg, goalieImg, ballImg, goalImg;

let goalBool = false
let goalTimer = 0
let goalTimePassed = 2000 

let creaseX, creaseY, creaseRadius = 100; 
let violation = false; 
let violationTimer = 0; 
const violationDuration = 180; 
let playCenterX = playerX = 60; 
let playCenterY = playerY = 60;

let startScreenBool = true
let gameBool =true

let timer = 60; 
let timerStart;
let gameOver = false;

let gameOverWinBool = false

let goalieSpeed = 4; 
let goalieStartY; 
let goalieRange = 60;
let goalieMinY, goalieMaxY;

let goalCount = 0;
let maxGoals = 10; 

function preload(){
	goalieImg = loadImage('lacrossegoalie.png');
	playerImg = loadImage('lacrossegirl.png');
	ballImg = loadImage('lacrosseball.png');
	goalImg = loadImage('lacrossegoal.png');
} 

function setup(){
	createCanvas(windowWidth, windowHeight);

	//Player setup 
	playerX = 70
	playerY = 550 

	//goalie setup
	goalieX = windowWidth - 280
	goalieY = windowHeight / 2 

	//ball setup
	ballX = playerX +40
	ballY = playerY - 20
	ballSpeed = 14 

	//goal setup 
	goalX = windowWidth - 200 +30;
	goalY = windowHeight / 2   ;

	//crease parameters 
	creaseX = goalX + 40 
	creaseY = goalY + 60

	goalieMinY = creaseY + 20; 
	goalieMaxY = goalY - 110;

	//goalieY = creaseY + 30;

	imageMode(CENTER)
} 

function draw(){
	if(startScreenBool){
		startScreen();
	}else if (gameBool){
		game();
	}else if (gameOver){
		gameOverLose()
	}else if(gameOverWinBool){
		gameOverWin() 
	}
	if (goalCount == maxGoals){
		gameOverWin()
	}
}

function gameOverLose(){
	background(0)
	fill(255)
	textAlign(CENTER, CENTER);
	textSize(80)
	text("GAME OVER", width / 2, height / 2)
}

function gameOverWin(){
	background (1, 246, 1)
	fill(255)
	textAlign(CENTER, CENTER);
	textSize(80)
	text("You Win!", width / 2, height / 2)
}

function startScreen(){
	background(135, 206, 250); 
	fill(255);
	textAlign(CENTER, CENTER);
	textSize(64);
	text("Welcome!", width / 2, height / 2 - 60);

	textSize(32);
	text("Click here to play lacrosse", width / 2, height / 2 + 10)
}

function game(){
	background(200, 240, 255) 

	let distanceToGoalie = 0;

	goalieY = goalieY + goalieSpeed;
	if(goalieY > goalieMinY || goalieY < goalieMaxY){
		goalieSpeed = goalieSpeed * -1;
	}

	//draw grass field 
	noStroke(); 
	fill(34, 139, 34); 
	rect(0, windowHeight / 2, windowWidth, windowHeight / 2); 

	// crease
	noFill();
	stroke(255);
	strokeWeight(4);
	arc(creaseX, creaseY, 200, 200, 0, PI)

	// midfield line
	let fieldTop = windowHeight / 2;
	let fieldBottom = windowHeight;
	let fieldMiddleX = windowWidth / 2;

	stroke(255); 
	strokeWeight(4); 
	line(fieldMiddleX, fieldTop, fieldMiddleX, fieldBottom); 
	noFill ();
	ellipse(fieldMiddleX, fieldTop + (fieldBottom - fieldTop) / 2, 100, 100);
	
	if(!violation){
		if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
			playerX -= 5;

		}
		if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
			playerX += 5;

		}
		if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
			playerY -= 5;

		}
		if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
			playerY += 5;

		}
	}

	if(!ballMoving){
		ballX = playerX + 40
		ballY = playerY - 20
	}else{
		ballX += ballSpeed
	}

	let ballCenterX = ballX + 15; 
	let ballCenterY = ballY + 15;

	let goalCenterX = goalX + 75; 
	let goalCenterY = goalY + 60; 

	let distanceToGoal = dist(ballCenterX, ballCenterY, goalCenterX, goalCenterY);

	if(distanceToGoal < 75 && goalBool ==false){
		goalBool =true
		goalCount++
		goalTimer = millis()
		playerX = 0; 
		playerY = 550; 
		ballMoving = false;
		ballX = playerX + 40
		ballY = playerY - 20;
	}

	if(goalBool == true){
		fill(0, 255, 0); 
		textSize(64)
		textAlign(CENTER, CENTER);
		text('GOAL!', windowWidth / 2, windowHeight / 2); 

		if(millis() >= goalTimer + goalTimePassed){

			goalBool = false
		}
	}

	if (ballMoving && !goalBool){
		let goalieCenterX = goalieX; 
		let goalieCenterY = goalieY;
		distanceToGoalie = dist(ballX, ballY, goalieCenterX, goalieCenterY);

		if(distanceToGoalie < 50){
			ballMoving = false;
			playerX = 70;
			playerY = 550;
			ballX = playerX + 40;
			ballY = playerY - 20

			fill(255, 0, 0)
			textSize(64)
			textAlign(CENTER, CENTER)
			text("SAVED!", width / 2, height / 2)
		}
	}

		let playerC = playerX + 60
		if(playerC > windowWidth - 275){
			fill(255, 0, 0); 
			textSize(64); 
			textAlign(CENTER, CENTER) 
			text('CREASE VIOLATION', windowWidth / 2, windowHeight / 2);

		}

	//draw goal
		image(goalImg, goalX, goalY, 250, 220)

	//draw goalie
		image(goalieImg, goalieX, goalieY, 80, 120)

	//draw player 
		image(playerImg, playerX, playerY, 120, 120)

	//draw ball
		image(ballImg, ballX, ballY, 30, 30)
		
//Timer 
		let secondsPassed = int((millis() - timerStart) / 1000);
		let timeLeft = max(0, timer - secondsPassed);
		fill(0)
		textSize(32)
		textAlign(LEFT, TOP);
		text("Time left: " + timeLeft + "s", 20, 20); 
		text("Goals: " + goalCount + "", windowWidth -300, 20)

		if(timeLeft <= 0) {
			gameOver = true;
			gameBool = false;
		}
		if(goalCount == 10){
			gameOverWinBool =true
		}
		if(playerY <= windowHeight / 2){
			playerY = windowHeight/2 +1 
		}
	}

	

	function mousePressed(){
		if(startScreenBool){
			startScreenBool = false;
			gameBool = true; 
			timerStart = millis(); 
			return;
		}

		if(!ballMoving && !goalBool && !gameOver){
			ballMoving = true; 
		}
	}