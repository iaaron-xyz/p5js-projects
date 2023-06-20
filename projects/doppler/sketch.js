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
  noFill();
  background('black');
  // Frames per second (60fps by default)
  noLoop();
}

// Resize in real time
function windowResized() {
  centerCanvas();
}

function draw() {
  stroke('SteelBlue');

  for (var count = 0; count <= 800; count += 10) {
    // ellipse(count, 300, 250);
    // ellipse(count, 300, count);
    ellipse(count, 300, count*2);
    // ellipse(count, 300, count*4);
    // ellipse(count*2, 300, count);
  }
}