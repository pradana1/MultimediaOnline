

var rays;
var  particles;

function setup() {
  rays = new Rays();
  particles = new Particles();
  createCanvas(windowWidth, windowHeight);
  mouseX = windowWidth/2;
  mouseY = windowHeight/2;
  cursor(CROSS);
  strokeWeight(3); 
}

function draw() {
  background("black");
  let center = createVector(windowWidth / 2, windowHeight / 2);
  if(frameCount % 20 === 0) {
    particles.addNew(center);
  }
  let m = createVector(mouseX, mouseY);
  rays.draw(center);
  particles.update(m.sub(center));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}