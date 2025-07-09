let player, playerX, playerY 
let ball, ballX, ballY, ballSpeed 
let goalie, goalieX, goalieY
let goalX, goalY
let ballMoving = false

let playerImg, goalieImg, ballImg, goalImg;


function preload(){
	goalieImg = loadImage('lacrossegoalie.jpg');
	playerImg = loadImage('lacrossegirl.jpg');
	ballImg = loadImage('lacrosseball.jpg');
	goalImg = loadImage('lacrossegoal.jpg');
} 

function setup(){
	createCanvas(windowWidth, windowHeight);

	//Player setup 
	playerX = 0
	playerY = 550 

	//goalie setup
	goalieX = windowWidth - 200
	goalieY = windowHeight / 2 - 50 

	//ball setup
	ballX = playerX +40
	ballY = playerY - 20
	ballSpeed = 5 

	//goal setup 
	goalX = windowWidth - 200
	goalY = windowHeight / 2 - 60
} 

function draw(){
	background(200, 240, 255) 

	if (keyIsDown(LEFT_ARROW) === true) {
    playerX -= 5;
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    playerX += 5;
  }

  if (keyIsDown(UP_ARROW) === true) {
    playerY -= 5;
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    playerY += 5;
  }

  if(!ballMoving){
  	ballX = playerX = 40
  	ballY = playerY - 20
  }else{
  	ballX += ballSpeed
  }

	//draw goal
	image(goalImg, goalX, goalY, 150, 120)

	//draw goalie
	image(goalieImg, goalieX, goalieY, 80, 120)

	//draw player 
	image(playerImg, playerX, playerY, 120, 120)

	//draw ball
	image(ballImg, ballX, ballY, 30, 30)
}

function mousePressed(){
	ballMoving = true
}
