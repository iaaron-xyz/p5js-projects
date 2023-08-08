// canvas variable
var cnv;
// custom fps
// var fps = 30;

// Set canvas position
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
function setup() {
  //- Center the canvas
  cnv = createCanvas(windowWidth-200, windowHeight-200);
  centerCanvas();
  noFill();
  background('black');
  //- Just render the function draw() once
  // noLoop();
  //- Frames per second (60fps by default)
  // frameRate(fps);
}
// Resize in real time
function windowResized() {
  centerCanvas();
}

// points counter
var samplePoint = 0;
const sizeSample = 1500;

function sampling() {
  return [random(10, width-10), random(10, height-10), 10]
}
function draw() {
  if (samplePoint < sizeSample) {
    noStroke();
    fill('yellow');
    [xCoord, yCoord, size] = sampling();
    ellipse(xCoord, yCoord, size);
    samplePoint += 1;
  } else {
    noLoop();
    console.log(`Total points: ${samplePoint}`)
  }
}
