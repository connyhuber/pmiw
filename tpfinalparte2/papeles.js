class Papeles {
  constructor(x, y, direccion, img) {
    this.x = x;
    this.y = y;
    this.ancho = 35;
    this.alto = 45;
    this.velocidad = 10;
    this.direccion = direccion;
    this.img = img;
  }

  mover() {
    this.x += this.velocidad * this.direccion;
  }

  dibujar() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.ancho, this.alto);
  }
}
