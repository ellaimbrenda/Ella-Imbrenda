let bench

function preload(){
  bench = loadImage('bench.jpeg')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(148, 228, 255) // light blue background
  noStroke()
  

  // Body (1)
  fill(160, 82, 45) //brown 
  ellipse(300,250,200,75)
  
  //Head (2)
  ellipse(200, 200, 100, 100)

  // Ears (3,4) 
  fill(139,69, 19) // darker brown 
  triangle(160,160,180,180,170,200) 
  triangle(240,160,220,180,230,200) 
  
  // Eyes (5,6)  
  fill(255)
  ellipse(185,190,20,20) 
  ellipse(215,190,20,20) 
  fill(0)
  ellipse(185,190,10,10) 
  ellipse(215,190,10,10)
  
  //Nose (7) 
  fill(0);
  ellipse(200,215,15,10)
  
  //Legs (8,9,10,11)
  fill(160,82,45)
  rect(250,275,15,40)
  rect(280,275,15,40)
  rect(320,275,15,40)
  rect(350,275,15,40)
  
  //Tail (12)
fill(160,82,45)
  ellipse(395,240,10,40) 
 
  // Grass
  fill(135, 228, 76)
  rect(0, 315, 600, 100)

  image(bench, windowWidth/2, windowHeight/2)
  
}