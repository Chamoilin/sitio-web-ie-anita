function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();  // Sin relleno para los círculos
}

function draw() {
  background(0);  // Fondo negro

  let maxSize = map(mouseY, 0, height, 10, 400);  // Tamaño máximo en función de mouseY
  let numCircles = 15;  // Número de círculos

  stroke(255, 182, 193);  // Color rosado pastel
  strokeWeight(2);  // Grosor del borde

  // Dibujar círculos en una línea horizontal en el centro del canvas
  for (let i = 0; i < numCircles; i++) {
    let size = map(i, 0, numCircles - 1, 10, maxSize);  // Tamaño de cada círculo
    let x = map(i, 0, numCircles - 1, width / 4, (3 * width) / 4);  // Posición x en el centro

    ellipse(x, height / 2, size);  // Dibujar círculo
  }
}