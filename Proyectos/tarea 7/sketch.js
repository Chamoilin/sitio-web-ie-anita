let img;

function preload() {
  img = loadImage("IMG_2765.JPG"); //
}

function setup() {
  createCanvas(800, 800);
  img.resize(800, 800); // Ajusta el tamaño de la imagen
  noLoop(); // Para detener el bucle draw y solo dibujar una vez
}

function draw() {
  background(255);
  img.loadPixels();

  let pointSize = 6; // Tamaño de cada punto

  for (let y = 0; y < img.height; y += pointSize) {
    for (let x = 0; x < img.width; x += pointSize) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      fill(r, g, b);
      noStroke();
      ellipse(x, y, pointSize, pointSize);
    }
  }
}