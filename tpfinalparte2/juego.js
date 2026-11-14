class Juego {
  constructor() {
    this.personaje = null;
    this.agrupaciones = [];
    this.papeles = [];
    this.vidas = 2;
    this.pantalla = 1;
    this.estado = "INICIO";

    this.imgCronopio = null;
    this.imgCronopio2 = null;
    this.imgCronopioPapel = null;
    this.imgSol = null;
    this.imgSol3 = null;
    this.imgSolPapel = null;
    this.piso = null;
    this.imgCapimini = null;
    this.imgCapiDer = null;
    this.imgCapiIzq = null;
    this.musica = null;

    //Timers de disparo
    this.timerIzq = 0;
    this.intervaloIzq = 60;
    this.timerDer = 0;
    this.intervaloDer = 60;

    //Botón créditos
    this.botonX = 20;
    this.botonY = 340;
    this.botonAncho = 120;
    this.botonAlto = 40;

    // Animación de créditos
    this.creditosTamano = 140;
    this.creditosCapiX = -140;
    this.creditosVelocidad = 4;
    this.creditosSeparacion = 190;
  }

  cargarRecursos() {
    this.imgCronopio = loadImage('data/cronopios.png');
    this.imgSol = loadImage('data/desolasol2.png');
    this.imgCronopio2 = loadImage('data/cronopios2.png');
    this.imgSol3 = loadImage('data/desolasol3.png');
    this.imgCronopioPapel = loadImage('data/cronopiospapel.png');
    this.imgSolPapel = loadImage('data/dsaspapel.png');
    this.piso = loadImage('data/piso.png');
    this.imgCapimini = loadImage('data/capimini.png');
    this.imgCapiDer = loadImage('data/capiderecha.png');
    this.imgCapiIzq = loadImage('data/capiizquierda.png');

    this.musica = loadSound('data/musica.mp3');
  }

  iniciarMusica() {
    if (!this.musica.isPlaying()) {
      this.musica.setLoop(true);
      this.musica.play();
    }
  }

  detenerMusica() {
    if (this.musica.isPlaying()) {
      this.musica.stop();
    }
  }

  reiniciar() {
    this.vidas = 2;
    this.pantalla = 1;
    this.papeles = [];
    this.personaje = new Personaje(width / 2, height - 50, this.imgCapiIzq, this.imgCapiDer, this.imgCapimini);
    this.cargarAgrupacionesPantalla1();
    this.estado = "INICIO";
    this.detenerMusica();
  }

//define posición de las agrupaciones y su tipo
  cargarAgrupacionesPantalla1() {
    this.agrupaciones = [];
    this.agrupaciones.push(new Agrupaciones(60, 100, 1, this.imgCronopio, this.imgCronopioPapel));
    this.agrupaciones.push(new Agrupaciones(60, 200, 1, this.imgCronopio, this.imgCronopioPapel));
    this.agrupaciones.push(new Agrupaciones(60, 300, 1, this.imgCronopio, this.imgCronopioPapel));
    this.agrupaciones.push(new Agrupaciones(740, 100, -1, this.imgSol, this.imgSolPapel));
    this.agrupaciones.push(new Agrupaciones(740, 200, -1, this.imgSol, this.imgSolPapel));
    this.agrupaciones.push(new Agrupaciones(740, 300, -1, this.imgSol, this.imgSolPapel));
  }

  cargarAgrupacionesPantalla2() {
    this.agrupaciones = [];
    this.agrupaciones.push(new Agrupaciones(60, 100, 1, this.imgSol3, this.imgSolPapel));
    this.agrupaciones.push(new Agrupaciones(60, 200, 1, this.imgSol3, this.imgSolPapel));
    this.agrupaciones.push(new Agrupaciones(60, 300, 1, this.imgSol3, this.imgSolPapel));
    this.agrupaciones.push(new Agrupaciones(740, 100, -1, this.imgCronopio2, this.imgCronopioPapel));
    this.agrupaciones.push(new Agrupaciones(740, 200, -1, this.imgCronopio2, this.imgCronopioPapel));
    this.agrupaciones.push(new Agrupaciones(740, 300, -1, this.imgCronopio2, this.imgCronopioPapel));
  }

  mouseSobreBoton() {
    return mouseX >= this.botonX && mouseX <= this.botonX + this.botonAncho &&
           mouseY >= this.botonY && mouseY <= this.botonY + this.botonAlto;
  }

  dibujarBoton(etiqueta) {
    rectMode(CORNER);
    if (this.mouseSobreBoton()) {
      fill(255);
    } else {
      fill(230, 230, 230, 200);
    }
    stroke(0);
    strokeWeight(2);
    rect(this.botonX, this.botonY, this.botonAncho, this.botonAlto, 8);
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(18);
    text(etiqueta, this.botonX + this.botonAncho / 2, this.botonY + this.botonAlto / 2);
  }

  dibujar() {
    imageMode(CORNER);
    image(this.piso, 0, 0, width, height);

    if ((this.estado === "INICIO" || this.estado === "CREDITOS") && this.mouseSobreBoton()) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }

    if (this.estado === "CREDITOS") {
      this.dibujarCreditos();
    } else if (this.estado === "INICIO") {
      this.dibujarInicio();
    } else if (this.estado === "GANASTE") {
      this.dibujarGanaste();
    } else if (this.estado === "GAMEOVER") {
      this.dibujarGameOver();
    } else if (this.estado === "JUGANDO") {
      this.jugar();
    }
  }

  dibujarCreditos() {
    fill(0, 180);
    noStroke();
    rect(0, 0, width, height);

    fill(135, 206, 235);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Créditos: Conny Huber y Lilian Quijano", width / 2, 70);

    let capiX = this.creditosCapiX;
    let cronoX = this.creditosCapiX - this.creditosSeparacion;
    let yPersecucion = height / 2 + 40;

    imageMode(CENTER);
    image(this.imgCapiDer, capiX, yPersecucion, this.creditosTamano, this.creditosTamano);
    image(this.imgCronopio, cronoX, yPersecucion, this.creditosTamano, this.creditosTamano);

    this.creditosCapiX += this.creditosVelocidad;

    
    if (cronoX - this.creditosTamano / 2 > width) {
      this.creditosCapiX = -this.creditosTamano / 2;
    }

    imageMode(CORNER);
    this.dibujarBoton("Volver");
  }

  dibujarInicio() {
    fill(0, 150);
    noStroke();
    rect(0, 0, width, height);

    fill(225);
    textAlign(CENTER, CENTER);
    textSize(37);
    text("¡Intenta salir de la facultad!", width / 2, 80);

    fill(255);
    textSize(18);
    text("Usa las flechas del teclado para mover a Capi.", width / 2, 150);
    text("Esquiva los papeles de los centros de estudiantes.", width / 2, 190);
    text("Llega a la parte superior para pasar de ronda y no tener que ir a votar, tenes 2 vidas.", width / 2, 230);

    textSize(20);
    fill(135, 206, 235);
    text("Presiona espacio para comenzar", width / 2, 310);

    this.dibujarBoton("Créditos");
  }

  dibujarGanaste() {
    this.detenerMusica();
    fill(0, 200);
    noStroke();
    rect(0, 0, width, height);
    fill(255);
    textSize(36);
    textAlign(CENTER, CENTER);
    text("¡FELICIDADES, LOGRASTE ESQUIVARLOS!", width / 2, height / 2 - 20);
    textSize(18);
    fill(135, 206, 235);
    text("Presiona r para volver a jugar", width / 2, height / 2 + 40);
  }

  dibujarGameOver() {
    this.detenerMusica();
    fill(0, 200);
    noStroke();
    rect(0, 0, width, height);
    fill(255);
    textSize(36);
    textAlign(CENTER, CENTER);
    text("¡PERDISTE, TENES QUE IR A VOTAR!", width / 2, height / 2 - 20);
    textSize(18);
    fill(135, 206, 235);
    text("Presiona r para reiniciar", width / 2, height / 2 + 40);
  }

  jugar() {
    this.personaje.mover();
    this.personaje.dibujar();

    //Cambio de pantalla si llega arriba
    if (this.personaje.y <= this.personaje.diametro / 2) {
      if (this.pantalla === 1) {
        this.pantalla = 2;
        this.cargarAgrupacionesPantalla2();
        this.personaje.y = height - 50;
      } else if (this.pantalla === 2) {
        this.estado = "GANASTE";
      }
    }

    //Disparos izquierda
    this.timerIzq++;
    if (this.timerIzq >= this.intervaloIzq) {
      let indiceIzq = int(random(0, 3));
      this.papeles.push(this.agrupaciones[indiceIzq].disparar());
      this.timerIzq = 0;
      this.intervaloIzq = random(20, 80);
    }

    //Disparos derecha
    this.timerDer++;
    if (this.timerDer >= this.intervaloDer) {
      let indiceDer = int(random(3, 6));
      this.papeles.push(this.agrupaciones[indiceDer].disparar());
      this.timerDer = 0;
      this.intervaloDer = random(20, 80);
    }

    //Dibujar agrupaciones
    for (let i = 0; i < this.agrupaciones.length; i++) {
      this.agrupaciones[i].dibujar();
    }

    // Actualizar papeles y colisiones
    for (let i = this.papeles.length - 1; i >= 0; i--) {
      this.papeles[i].mover();
      this.papeles[i].dibujar();
      
      let d = dist(this.personaje.x, this.personaje.y, this.papeles[i].x, this.papeles[i].y);
      if (d < (this.personaje.diametro / 2 + this.papeles[i].ancho / 2)) {
        this.vidas -= 1;
        this.papeles.splice(i, 1);
        if (this.vidas <= 0) {
          this.estado = "GAMEOVER"; // si pierde ambas vidas pierde la partida
        }
        continue;
      }

      if (this.papeles[i].x < -50 || this.papeles[i].x > width + 50) {
        this.papeles.splice(i, 1);
      }
    }

    //Indicador de ronda
    fill(0);
    noStroke();
    textSize(20);
    textAlign(LEFT, BASELINE);
    text("Ronda: " + this.pantalla, 20, 30);
  }

  //Pantallas
  mousePresionado() {
    if (this.estado === "INICIO" && this.mouseSobreBoton()) {
      this.estado = "CREDITOS";
      this.creditosCapiX = -this.creditosTamano / 2;
    } else if (this.estado === "CREDITOS" && this.mouseSobreBoton()) {
      this.estado = "INICIO";
    }
  }

  teclaPresionada() {
    //Al presionar la barra espaciadora comienza la musica y el juego
    userStartAudio();

    if (this.estado === "INICIO" && key === ' ') {
      this.estado = "JUGANDO";
      this.iniciarMusica();
    }

    if (this.estado === "CREDITOS" && keyCode === ESCAPE) {
      this.estado = "INICIO";
    }

    if ((this.estado === "GAMEOVER" || this.estado === "GANASTE") && (key === 'r' || key === 'R')) {
      this.reiniciar();
    }
  }
}
