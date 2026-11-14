//link del video explicativo: https://youtu.be/aaRgQ2hUfWw

let juego;

function preload() {
  juego = new Juego();
  juego.cargarRecursos();
}

function setup() {
  createCanvas(800, 400);
  juego.reiniciar();
}

function draw() {
  juego.dibujar();
}

function mousePressed() {
  juego.mousePresionado();
}

function keyPressed() {
  juego.teclaPresionada();
}
