class Agrupaciones {
  constructor(x, y, direccion, imgAgrupacion, imgPapel) {
    this.x = x;
    this.y = y;
    this.ancho = 60;
    this.alto = 60;
    this.direccion = direccion;
    this.imgAgrupacion = imgAgrupacion;
    this.imgPapel = imgPapel;
  }

  dibujar() {
    imageMode(CENTER);
    image(this.imgAgrupacion, this.x, this.y, this.ancho, this.alto);
  }

  disparar() {
    return new Papeles(this.x, this.y, this.direccion, this.imgPapel);
  }
}
