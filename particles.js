
class Particles {
  constructor() {
    this.particles = [];
  }  
  
  addNew(center) {
    let dx = random(-10, 10);
    let dy = random(-10, 10)
    let p = new Particle(center.x + dx, center.y + dy, 6);
    this.particles.push(p);  
  }
  
  update(v) {
    noStroke();
    v.normalize();
    let index = this.particles.length;
    // Loop through backwards so we can remove
    // particles from the array inside the loop.
    while(index--){
      let p = this.particles[index];
      p.move(v.x, v.y);
      if(p.opacity < 0 || p.x < 0 || 
         p.x > windowWidth || p.y < 0 || p.y > windowHeight) {
        this.particles.splice(index, 1);
      } else {
        p.draw();
      }
    }
  }
}