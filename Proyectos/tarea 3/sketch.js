function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255, 255, 255); 
  let numCircles = 12;       
  let maxRadius = 50;        
  
  translate(width / 2, height / 2);  // Trasladamos el sistema de coordenadas al centro
  
  for (let i = 0; i < numCircles; i++) {
    let angle = map(i, 0, numCircles, 0, TWO_PI); 
    let x = cos(angle + frameCount * 0.02) * 100;  // Movimiento circular en X
    let y = sin(angle + frameCount * 0.02) * 100;  // Movimiento circular en Y
    let r = map(sin(frameCount * 0.05 + i), -1, 1, 20, maxRadius);  // Radio dinámico
    
    fill(255, 182, 193, 200); 
    ellipse(x, y, r, r);       
  }
}