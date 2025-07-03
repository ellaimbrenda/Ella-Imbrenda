let dogX = 0;
let showBench = true;
 
function preload() {
  bench =  loadImage('bench.jpeg');
  tree = loadImage('tree.png');
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(148, 228, 255);

  // Grass
  fill(135, 228, 76);
  rect(0, 350, 600, 50);

  // Tree
  image(tree, 50, 200, 100, 150);

  // Bench
  if (showBench) {
    image(bench, tree);
bench(300, 250, 150, 100);
  }

  // Dog body + head
  fill(160, 82, 45);
  ellipse(dogX + 100, 300, 150, 50); // body
  ellipse(dogX + 50, 270, 60, 60);   // head

  dogX += 2;
  if (dogX > width) {
    dogX = -150;
  }
}

function mousePressed() {
  dogX = mouseX - 100;
}

function keyPressed() {
  showBench = !showBench;
}