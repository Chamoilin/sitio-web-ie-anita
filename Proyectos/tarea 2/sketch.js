function setup() {
  createCanvas(400, 400);
  noStroke();
  frameRate(10); // Tasa de cuadros para controlar el parpadeo
}

function draw() {
  background('#FFD1DC'); // Fondo rosado pastel

  let spacing = 40; // Espacio entre los corazones

  // Dibujar corazones en filas y columnas para rellenar todo el canvas
  for (let y = spacing / 2; y < height; y += spacing) {
    for (let x = spacing / 2; x < width; x += spacing) {
      drawHeartRowColumn(x, y);
    }
  }
}

function drawHeartRowColumn(x, y) {
  if (random() > 0.5) {
    fill(randomColor()); // Cambia el color para crear el efecto de parpadeo
  } else {
    fill('#FFD1DC'); // Mismo color que el fondo para el parpadeo
  }
  drawHeart(x, y, 20); // Dibuja el corazón con tamaño 20
}

function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function randomColor() {
  // Devuelve un color blanco o naranjo pastel aleatoriamente
  return random(['#FFFFFF', '#FFB07C']);
}