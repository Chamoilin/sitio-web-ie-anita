let verticalCircles = [];
let diagonalCircles = [];
let numCircles = 18;

function setup() {
  createCanvas(600, 600);
  background(0);
  
  // Crear círculos que se mueven verticalmente (rosado pastel)
  for (let i = 0; i < numCircles; i++) {
    verticalCircles.push(new VerticalCircle(random(width), random(height), random(20, 50)));
  }

  // Crear círculos que se mueven en diagonal (celeste pastel)
  for (let i = 0; i < numCircles; i++) {
    diagonalCircles.push(new DiagonalCircle(random(width), random(height), random(20, 50)));
  }
}

function draw() {
  background(0);

  // Dibujar y actualizar los círculos verticales
  for (let c of verticalCircles) {
    c.move();
    c.display();
    c.checkEdges();
  }

  // Dibujar y actualizar los círculos diagonales
  for (let c of diagonalCircles) {
    c.move();
    c.display();
    c.checkEdges();
  }
}

// Clase para los círculos que se mueven verticalmente (rosado pastel)
class VerticalCircle {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.ySpeed = random(1, 4);
  }

  move() {
    this.y += this.ySpeed;
  }

  display() {
    noStroke();
    fill(204, 150); // Rosado pastel con transparencia
    ellipse(this.x, this.y, this.diameter);
  }

  checkEdges() {
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1; // Cambiar dirección al chocar con los bordes superior/inferior
    }
  }
}

// Clase para los círculos que se mueven en diagonal (celeste pastel)
class DiagonalCircle {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.xSpeed = random(1, 3);
    this.ySpeed = random(1, 3);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  display() {
    noStroke();
    fill(173, 216, 230, 150); // Celeste pastel con transparencia
    ellipse(this.x, this.y, this.diameter);
  }

  checkEdges() {
    // Rebotar en los bordes del canvas
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }
}