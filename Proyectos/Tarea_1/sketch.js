function setup() {
  createCanvas(800, 800);
  noLoop(); // 
  background(255);
  noFill();
  strokeWeight(2);
}

function draw() {
  let numSquares = 10; // 
  let baseSize = width * 0.8; // 

  // 
  let colors = [
    color(255, 182, 193), // 
    color(255, 192, 203), // 
    color(255, 240, 245), // 
    color(255, 255, 102), // 
    color(255, 204, 102), // 
    color(255, 153, 102), // 
    color(216, 191, 216), // 
    color(221, 160, 221), // 
    color(238, 130, 238)  // 
  ];

  for (let i = 0; i < numSquares; i++) {
    let size = baseSize - i * (baseSize / numSquares) + random(-10, 10); //
    let x = width / 2 - size / 2 + random(-20, 20); // Posición X
    let y = height / 2 - size / 2 + random(-20, 20); // Posición Y

    stroke(colors[i % colors.length]); //
    rect(x, y, size, size); // 
  }
}