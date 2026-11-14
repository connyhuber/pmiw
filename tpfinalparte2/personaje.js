class Personaje {
  constructor(x, y, imgIzq, imgDer, imgQuieto) {
    this.x = x;
    this.y = y;
    this.diametro = 70;
    this.velocidad = 3;
    this.estadoMovimiento = "normal";
    this.imgIzq = imgIzq;
    this.imgDer = imgDer;
    this.imgQuieto = imgQuieto;
  }

  mover() {
    this.estadoMovimiento = "normal";

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
      this.estadoMovimiento = "izq";
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad;
      this.estadoMovimiento = "der";
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.velocidad;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.velocidad;
    }

    this.x = constrain(this.x, this.diametro / 2, width - this.diametro / 2);
    this.y = constrain(this.y, this.diametro / 2, height); //limite del mapa
  }

  dibujar() {
    imageMode(CENTER);
    if (this.estadoMovimiento === "izq") {
      image(this.imgIzq, this.x, this.y, this.diametro, this.diametro);
    } else if (this.estadoMovimiento === "der") {
      image(this.imgDer, this.x, this.y, this.diametro, this.diametro);
    } else {
      image(this.imgQuieto, this.x, this.y, this.diametro, this.diametro);
    }
  }
}
