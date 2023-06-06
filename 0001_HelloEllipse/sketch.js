const CANVAS_SIZE = {
  x: 720,
  y: 720,
}

function setup() {
  // Canvas size
  var cnv = createCanvas(CANVAS_SIZE.x, CANVAS_SIZE.y);
  // Reposition the canvas in the center of the viewport
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  // Background color
  background(200);
  // frameRate of the draw() function
  frameRate(24);
}

// Rotation variable
let t = 0;
function draw() {
  background(200);
  // Translate the origin to the center of the canvas.
  translate(width / 2, height / 2);
  
  // Rotate the canvas AFTER the translation
  rotate(t);
  // update the rotation value
  t += 0.1;

  // Draw a spinning ellipse
  fill(0);
  ellipse(100, 0, 200, 50);
}