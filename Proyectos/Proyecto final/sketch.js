let numLayers = 30;  // Número de capas
let numPoints = 100;  // Número de puntos en cada capa
let radius = 50;  // Radio base
let angleOffset = 0;  // Offset para animación

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);  // Color blanco para las líneas
  noFill();
}

function draw() {
  background(0);  // Fondo negro
  
  translate(width / 2, height / 2);  // Centrar la figura
  
  let angleStep = TWO_PI / numPoints;  // Espacio entre puntos en la circunferencia
  
  for (let i = 0; i < numLayers; i++) {
    let layerRadius = radius + i * 2;  // Variar el radio con cada capa
    let layerAngleOffset = angleOffset + i * 0.05;  // Crear una separación de capas
    
    beginShape();
    
    for (let j = 0; j < numPoints; j++) {
      let angle = j * angleStep + layerAngleOffset;  // Cálculo del ángulo
      
      // Crear puntos basados en el ángulo y el radio
      let x = layerRadius * cos(angle) * (1 + sin(j * 0.1));
      let y = layerRadius * sin(angle) * (1 + cos(j * 0.1));
      
      vertex(x, y);  // Dibujar vértice
      
      // Añadir líneas cruzadas para dar el efecto de convergencia
      if (j % 10 == 0) {
        let nextX = layerRadius * cos(angle + angleStep) * 0.1;
        let nextY = layerRadius * sin(angle + angleStep) * 0.8;
        line(x, y, nextX, nextY);  // Dibujar líneas cruzadas
      }
    }
    
    endShape(CLOSE);  // Cerrar la forma
  }
  
  angleOffset += 0.01;  // Animar el giro
}