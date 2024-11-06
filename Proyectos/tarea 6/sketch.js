let particles = [];
let numParticles = 200;
let attractor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  attractor = createVector(width / 2, height / 2);
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
  background(0);  
}

function draw() {
  background(0, 20);  

  for (let particle of particles) {
    let mouse = createVector(mouseX, mouseY);

    let attractionForce = p5.Vector.sub(attractor, particle.pos);
    attractionForce.setMag(0.1); // Fuerza de atracción

    let repulsionForce = p5.Vector.sub(particle.pos, mouse);
    let distance = repulsionForce.mag();
    
    if (distance < 100) {
      repulsionForce.setMag(2);  // Fuerza de repulsión más fuerte cerca del mouse
    } else {
      repulsionForce.setMag(0);  // Sin repulsión si está lejos
    }

    particle.applyForce(attractionForce);
    particle.applyForce(repulsionForce);

    particle.update();
    particle.show();
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.acc = createVector(0, 0);
    this.radius = random(5, 15);
    this.transparency = random(100, 255);  // Algunas partículas con transparencia
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);  // Reiniciar aceleración
  }

  show() {
    noStroke();
    fill(255, 182, 193, this.transparency);  // Color rosado pastel
    ellipse(this.pos.x, this.pos.y, this.radius);
  }
}