var stepX;
var stepY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, width, height, 100);
  frameRate(30);
}

function draw() {
  stepX = mouseX + 2;
  stepY = mouseY + 2;
  console.log("hola");

  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas("images", 'png');
}