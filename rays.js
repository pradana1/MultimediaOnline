class Rays {
  constructor() {
    this.rays = [];
    let m = max(windowWidth, windowHeight);
    for(let i = 0; i < 250; i++) {
      let angle = random(TWO_PI);
      let radius = random(m/2);
      this.rays.push( { a: angle, r: radius } );
    }    
  }
  
  draw(center) {
    stroke(200, 255, 200, 40);
    this.rays.forEach((ray, i) => {
      let n = noise(frameCount/100 + i * 100);
      let x2 = cos(ray.a+n/5) * (ray.r + n*40) + mouseX;
      let y2 = sin(ray.a+n/5) * (ray.r + n*40) + mouseY;
      line(center.x, center.y, x2, y2);
    }); 
  }
}
