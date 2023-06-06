function setup() {
  // Canvas size
  var cnv = createCanvas(720, 720);
  // Reposition the canvas in the center of the viewport
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  colorMode(HSB, 360, 100, 100);
  noCursor();
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(mouseY/2, 100, 100);
  fill(360 - mouseY/2, 100, 100);
  rect(360, 360, mouseX+1, mouseX+1);
}
