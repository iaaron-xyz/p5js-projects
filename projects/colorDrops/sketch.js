var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  // CENTER THE CANVAS
  cnv = createCanvas(800, 600);
  centerCanvas();
  noStroke();
  background('black');
  // Frames per second (60fps by default)
  frameRate(24);
}

// Resize in real time
function windowResized() {
  centerCanvas();
}

var transparency = 250;
var colors = ['LightPink', 'LightSkyBlue', 'LightGreen', 'LightYellow'];
function draw() {
  // Add a transparency layer every iteration
  background('rgba(0,0,0, 0.05)');
  fill(random(colors));
  ellipse(random(800), random(600), random(10, 20));
  fill(random(colors));
  ellipse(random(800), random(600), random(10, 20));
}