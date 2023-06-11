var segmentCount = 360;
var radius = 300;

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  // CENTER THE CANVAS
  cnv = createCanvas(800, 800);
  centerCanvas();

  noStroke();
}

function windowResized() {
  centerCanvas();
}

function draw() {
  colorMode(HSB, 360, width, height);
  background(360, 0, height);
  // number of slices
  var angleStep = 360 / segmentCount;

  // start a new shape
  beginShape(TRIANGLE_FAN);
  vertex(width/2, height/2);
  for (var angle = 0; angle <= 360; angle += angleStep) {
    var vx = width/2 + cos(radians(angle))*radius;
    var vy = height/2 + sin(radians(angle))*radius;
    vertex(vx, vy);
    fill(angle, mouseX, mouseY);
  }
  // end the new shape
  endShape();
}

function keyPressed() {
  switch (key) {
    case '1':
      segmentCount = 360;
      break;
    case '2':
      segmentCount = 90;
      break;
    case '3':
      segmentCount = 45;
      break;
    case '4':
      segmentCount = 30;
      break;
    case '5':
      segmentCount = 12;
      break;
    case '6':
      segmentCount = 6;
      break;
  }
}
