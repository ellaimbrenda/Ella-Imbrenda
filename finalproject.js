let player, playerX, playerY 
let ball, ballX, ballY, ballSpeed 
let goalie, goalieX, goalieY

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
	playerX = windowWidth/2
	playerY = windowHeight/2
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

	//ball setup
	ballX = playerX +40
	ballY = playeY - 20

	ballSpeed = 2

}