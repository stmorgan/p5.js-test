// p5.js example

function setup() {
  createCanvas(windowWidth, windowHeight);
  newMouseX = mouseX;
  newMouseY = mouseY;
  lastMouseX = newMouseX;
  lastMouseY = newMouseY;
}

function draw() {
  lastMouseX = newMouseX;
  lastMouseY = newMouseY;
  newMouseX = mouseX;
  newMouseY = mouseY;

  if (mouseIsPressed) {
    line(lastMouseX, lastMouseY, newMouseX, newMouseY);
  }
}
