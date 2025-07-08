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


function keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y - 10;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 10;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 5;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 5;
  }
}

function draw(){
	background(200, 240, 255)

	//draw goalie
	image(goalieImg, goalieX, goalieY, 60, 100)

	//draw player
	image(playerImg, playerX, playerY, 120, 120)

}