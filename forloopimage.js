
let furby


function preload(){
furby = loadImage ('furby.png') 
} 

function setup(){
	createCanvas(windowWidth, windowHeight)

rectMode(CENTER)
}



function draw(){
	if(keyIsPressed==true){
	background(230, 160, 88)
}else{ 
	background(230,160,88)
  } 
textSize(50) 
//fill(random(255), random (255), random (255))
text("For Loops!!!", 100, 80)
for(let i= 0; i<windowWidth; i=i+10){
	line(0, 0, i, windowHeight)
} 

  
   for(let i=0; i<windowHeight; i= i+10) {
   	line(0, i, windowWidth, i)
   }


image(furby, windowWidth/2, windowHeight/2) 

 }