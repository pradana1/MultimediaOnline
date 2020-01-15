
class Particle {
  constructor (x, y, size) {
    this.speed = 1.5;
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * this.speed*3;
    this.vy = (Math.random() - 0.5) * this.speed*3;
    this.opacity = 1;
    this.size = size;
  }

  draw () {
    this.opacity -= this.speed/300;
    this.setColor();
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  move (ax, ay) {
    this.x += this.vx + (ax/this.opacity) * this.speed;
    this.y += this.vy + (ay/this.opacity) * this.speed;
  }
    
  setColor() {
    fill(200, 255, 200, this.opacity*255);
  }
}
