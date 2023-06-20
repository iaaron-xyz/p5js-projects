var cnv;
var fps = 30;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  // CENTER THE CANVAS
  cnv = createCanvas(windowWidth-100, 600);
  centerCanvas();
  noFill();
  background('black');
  // Frames per second (60fps by default)
  // noLoop();
  frameRate(fps);
}

// Resize in real time
function windowResized() {
  centerCanvas();
}

var count = 0;
function draw() {
  if (count <= width) {
    stroke('White');
    // ellipse(count, 300, count*2);
    // Other patterns
    // ellipse(count, 300, 250);
    ellipse(count, 300, count);
    // ellipse(count, 300, count*4);
    ellipse(count*2, 300, count);
  } else {
    background('black');
    count = 0;
  }
  count += 10
}