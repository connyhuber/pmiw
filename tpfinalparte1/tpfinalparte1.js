//https://youtu.be/i8blg7IjqCk - video Conny
//https://youtu.be/MqHGqLoMZCU - video Lilian

//Estados y control
let estadoJuego = "PANTALLA_INICIO";
let indiceDialogo = 0;

//Texto progresivo
let minTexto = 0;
let maxTexto = 0;

//Variables para la animación del logo
let logoY = -150;
let logoVelocidad = 3;

//Entrevistas ya realizadas: 
let entrevistados = [false, false, false];

//Preguntas ya hechas a Boñi
let preguntasBoni = [false, false];

//Imagenes
let logo = [];
let fondologo = [];
let inicio = [];
let capi = [];
let lechuza = [];
let pato = [];
let murcielago = [];
let murcielagollorando = [];
let boni = [];
let monio = [];
let nokia = [];
let puestos = [];
let puestopapita = [];
let papita = [];
let pitylibre = [];
let pitypeluca = [];
let pity = [];
let pitypresa = [];
let pruebas = [];
let provisorio = [];
let papas = [];
let pasillofonseca = [];
let pasillo = [];

//musica
let musicaseguida;
let entrevistas;
let cumbiapapita;
let guitarra;
let yay;
let perder;
let ganar;

//Dialogos
let dialogoIntroduccionCapi = [
  ["", "En este mundo de peluches, la paz y el amor rodean nuestras felpudas vidas, pero eso no impide que algunos de nosotros estén llenos de maldad."],
  ["", "Ni el más puro de relleno se salva de la crueldad de otro. El día de hoy, el miedo y la incertidumbre rodean a la facultad de Bellas Pelusas, un peluche despeluchado fue reportado cerca de sus calles, una alumna perdió la vida, Pity."],
  ["Capi", "Soy Capi, detective privada. Me llamaron porque este caso necesita más que simples suposiciones, necesita que alguien levante las costuras de la verdad."],
  ["Capi", "Voy directo a la escena del crimen para ver qué pistas dejaron atrás..."]
];

let dialogoPato = [
  ["Pato", "Oink Oink"]
];

let dialogoMurcielago = [
  ["Murciélago F.", "La última vez que vi a Pity ella estaba muy preocupada por no tener saldo en la sube, venía con una semana muy mala, las cosas no le venían saliendo bien..."],
  ["Murciélago F.", "Pobre chica, nunca pudo regresar con su familia... perdoname, no puedo hablar más."]
];

let dialogoLechuza = [
  ["Lechuza", "¡Yo nunca conocí a Pity, lo juro!"],
  ["Lechuza", "Solo escuché hablar sobre ella en los pasillos, supongo que era una chica muy querida."],
  ["Lechuza", "Lo único que sé es a quién no le caía bien... yo lo sé, todos lo sabemos, Boni. La odiaba con todo su relleno, sería mi primer sospechoso."],
  ["Lechuza", "Cursa programación en este horario, quizás puedas encontrarlo."]
];

let dialogoMonologoCapi = [
  ["Capi", "Ya interrogue a cada uno, pero todo sigue muy confuso... aún no tengo pruebas clave."],
  ["Capi", "Lo único útil que sé es que este tal Boñi cursa en este horario. El odio llevando a un crimen, no sería nada nuevo..."],
  ["Capi", "Voy a ir a buscarlo."]
];

let dialogoBuscandoBoni = [
  ["", "Subís al segundo piso de la facultad en busca del aula de programación..."],
  ["", "Encontras a Boñi en el pasillo, lo empujas para llamar su atención."]
];

let dialogoBoniInicio = [
  ["Boñi", "¡Eu! ¿Qué te pasa? Casi me haces tirar mi café."],
  ["Boñi", "Uy, disculpa, ¿sos la detective a la que iban a traer por lo que pasó?"],
  ["Capi", "Asi es, tengo un par de preguntas para hacerle, me dijeron que usted estaba relacionado de cierta forma con la victima."],
  ["Boñi", "Te voy diciendo que todo lo que te hayan dicho de mi sobre Pity es mentira..."]
];

let dialogoBoniMono = [
  ["", "Boñi se sorprende y se pone nervioso cuando le enseñas el objeto."],
  ["Boñi", "Ese moño fue un regalo que le hice hace mucho tiempo, eramos amigos en su momento."],
  ["Boñi", "No puedo creer que lo seguía guardando, es muy viejo... pero igual no significa nada, como te estoy diciendo, es una cosa vieja que justo ella tenía, yo no estuve ahí."]
];

let dialogoBoniCoartada = [
  ["Boñi", "Mirá, estuve cursando a la hora del crimen. Acá tengo el presente en mi celular..."],
  ["Capi", "¿Un Nokia 1208b? Pará un poco, Boñi... ¿cómo hacés para escanear el QR del presente con semejante reliquia?"],
  ["Boñi", "¡Me las arreglo! Pero en serio, la coartada es válida, estuve en el aula toda la cursada."]
];

let dialogoBoniFinal = [
  ["Boñi", "Te recomiendo que vayas a hablar con los vendores que están afuera de la facu, si el crimen fue ahí, algo deben saber o haber visto."]
];

let dialogoTransicionAfuera = [
  ["Capi", "Es imposible que nadie sepa nada de valor siendo un crimen que ocurrió en plena luz del día..."],
  ["", "Te dirijes con tu frustración a la puerta de la facultad, esperando encontrar finalmente algún tipo de información crucial sobre el homicidio."]
];

let dialogoPuestoPapasOferta = [
  ["Papita", "¡Dos por uno el conooooooooo! Con cheddar y panceta, una oferta imperdible señoreeeeeeesss."],
  ["Papita", "Buenas, ¿vas a comprar?"]
];

let dialogoAceptarPapasGameOver = [
  ["", "Aceptas las papas del vendedor, pero antes de recibirlas te resbalas con el aceite viejo del puesto, causando que te descosas."],
  ["", "Te vas de la escena sucia y decepcionada, con tu brazo abierto. Caso inconcluso."]
];

let dialogoRechazarPapas = [
  ["", "Intentás preguntarle si sabe algo de Pity pero solo grita sobre la promo de papas, ignorándote. Decidís alejarte y dirigirte al puesto de panchos."]
];

let dialogoPuestoPanchos = [
  ["", "Cuando llegas, ves a una vendedora muy sospechosa atendiendo el puesto, es muy parecida a la victima, ¿o ya estás alucinando?"],
  ["Capi", "Disculpe, ¿no sabrá algo sobre Pity? soy Capi, detective privada, estoy investigando su caso ya que hoy la facultad me llamó para..."],
  ["Vendedora", "Nop."],
  ["Capi", "¿Segura? ¿Tendrá idea si alguien por acá tiene algún testimonio? podría serme de mucha ayuda ya que..."],
  ["Vendedora", "Nop."],
  ["Capi", "..."],
  ["Pity", "¡Ey, ey! ¡Cuidado con el peinado!"],
  ["Capi", "¡¿Pity?!"],
  ["Pity", "¡Perdoneme señora detective! ¡Tuve que hacer esto! no tenía mas saldo en la sube para volver a Felpazategui, no tenía otra opción."],
  ["Capi", "¿Fingiste tu muerte por no tener saldo en la SUBE? ¿Esa te parece una solución normal? preocupaste a todo el mundo."],
  ["Pity", "Entré en pánico."],
  ["Capi", "No entiendo ¿Entonces de dónde salió el relleno de la escena del crimen si estas viva?"],
  ["Pity", "Ah, ¿eso? Lo compré en Tejido Libre para regalárselo a mi ex amigo Boñi y arreglar las cosas, él comenzó a odiarme porque supuestamente perdí mi humildad cuando conseguí más relleno y me hice mas abrazable."],
  ["Pity", "Pero con el relleno en las manos... me di cuenta que era la oportunidad perfecta para fingir mi muerte. Ahora vendo panchos para ganarme la vida, no me va tan mal."],
  ["Capi", "...Por favor detective, perdoneme por todo esto, yo solo quería comenzar mi vidad desde cero."]
];

//Dialogos de finales
let dialogoFinalCarcel = [
  ["Capi", "Fingir tu muerte y hacer movilizar a todo el departamento de peluches por no tener saldo en la SUBE es un delito grave..."],
  ["", "Pity termina tras las rejas por fraude y escándalo público. Capi resuelve exitosamente el caso del misterio del relleno."]
];

let dialogoFinalDejarIr = [
  ["Capi", "Entiendo la desesperación de no poder volver a Felpazategui, pero no era necesario hacer todo esto... Te voy a dejar ir, pero mantené un perfil bajo, no me metas en problemas por esto."],
  ["Pity", "¡Muchas gracias Capi! Te prometo que de ahora en adelante seré una peluche de bien."],
  ["", "Capi decide cerrar el expediente como un misterio no resuelto, dejando a Pity rehacer su vida."]
];


function preload() {
  logo.push(loadImage("data/logo.png"));
  fondologo.push(loadImage("data/fondologo.jpeg"));
  inicio.push(loadImage("data/oficina.png"));
  capi.push(loadImage("data/capii.png"));
  pasillofonseca.push(loadImage("data/pasillofonseca.jpeg"));
  lechuza.push(loadImage("data/lechuza.png"));
  pato.push(loadImage("data/pato.png"));
  murcielago.push(loadImage("data/murcielago.png"));
  murcielagollorando.push(loadImage("data/murcielagollorando.png"));
  boni.push(loadImage("data/boni.png"));
  nokia.push(loadImage("data/nokia.png"));
  monio.push(loadImage("data/monio.png"));
  pasillo.push(loadImage("data/pasillo.jpeg"));
  puestos.push(loadImage("data/inicio.png"));
  puestopapita.push(loadImage("data/sinpapita.png"));
  papita.push(loadImage("data/papita.png"));
  pitypeluca.push(loadImage("data/pitypeluca.png"));
  pity.push(loadImage("data/pity.png"));
  pitylibre.push(loadImage("data/pitylibre.png"));
  pitypresa.push(loadImage("data/pitypresa.png"));
  pruebas.push(loadImage("data/pruebas.png"));
  provisorio.push(loadImage("data/provisorio.jpg"));
  papas.push(loadImage("data/papas.jpeg"));

  musicaseguida = loadSound("data/musicaseguida.wav");
  cumbiapapita = loadSound("data/cumbia.wav");
  entrevistas = loadSound("data/interrogatorios.mp3");
  guitarra = loadSound("data/guitarra.mp3");
  yay = loadSound("data/yay.mpeg");
}

function setup() {
  createCanvas(800, 450);
  textAlign(LEFT, TOP);
  textSize(14);
}

function draw() {
  background(30);

  let hayMusicaEspecial = (entrevistas.isPlaying() || cumbiapapita.isPlaying() || guitarra.isPlaying() || yay.isPlaying());
  if (!hayMusicaEspecial && !musicaseguida.isPlaying()) {
    musicaseguida.loop(); //define la musica principal si otra musica no se esta reproduciendo
  }

  if (estadoJuego === "PANTALLA_INICIO") {
    if (fondologo.length > 0 && fondologo[0].width > 0) {
      image(fondologo[0], 0, 0, width, height); //diuba el fondo, los personajes y el titulo que cae
    }

    if (logoY < 100) {
      logoY += logoVelocidad;
    }

    if (logo.length > 0 && logo[0].width > 0) {
      push();
      imageMode(CENTER);
      image(logo[0], width / 2, logoY, 340, 160);
      pop();
    }

    // Personajes grandes y pegados al piso 
    let baseY = 450;
    let anchoP = 170;
    let altoP = 230;

    if (capi.length > 0 && capi[0].width > 0) {
      let saltoCapi = abs(sin(frameCount * 0.1) * 8);
      image(capi[0], 40, baseY - altoP - saltoCapi, anchoP, altoP);
    }
    if (boni.length > 0 && boni[0].width > 0) {
      let saltoBoni = abs(sin(frameCount * 0.1 + 1) * 8);
      image(boni[0], 190, baseY - altoP - saltoBoni, anchoP, altoP);
    }
    if (pato.length > 0 && pato[0].width > 0) {
      let saltoPato = abs(sin(frameCount * 0.1 + 2) * 8);
      image(pato[0], 340, baseY - altoP - saltoPato, anchoP, altoP);
    }
    if (lechuza.length > 0 && lechuza[0].width > 0) {
      let saltoLechuza = abs(sin(frameCount * 0.1 + 3) * 8);
      image(lechuza[0], 490, baseY - altoP - saltoLechuza, anchoP, altoP);
    }
    if (murcielago.length > 0 && murcielago[0].width > 0) {
      let saltoMurci = abs(sin(frameCount * 0.1 + 4) * 8);
      image(murcielago[0], 610, baseY - altoP - saltoMurci, anchoP, altoP); //animaciones de salto de la intro
    }

    // Créditos arriba de los personajes o sutiles abajo
    push();
    fill(255, 255, 255, 220);
    noStroke();
    textSize(12);
    textStyle(BOLD);
    textAlign(CENTER, BOTTOM);
    text("CRÉDITOS: LILIAN QUIJANO Y CONNY HUBER", width / 2, height - 5);
    pop();
  }
  else if (estadoJuego === "INTRO") {
    image(inicio[0], 0, 0, width, height);
    manejarDialogoModular(dialogoIntroduccionCapi, capi.length > 0 ? capi[0] : null); //llama a las funciones modulares que dibujan a las caja y escribe el texto de manera progresiva sin repetir el codigo en cada escena
  }
  else if (estadoJuego === "ESCENA_CRIMEN") {
    if (pruebas.length > 0 && pruebas[0].width > 0) {
      image(pruebas[0], 0, 0, width, height);
    }
    dibujarCajaTextoConBoton(
      "Capi",
      "Al llegar inspeccionas minuciosamente la escena del crimen. En este lugar se encuentra el DNI, la SUBE y el relleno de la víctima, al igual que un llamativo moño rojo al que decidis llevar como evidencia... El cuerpo ya no se encuentra en el lugar, la funeraria actuó bastante rápido",
      "Ir a la facultad a interrogar"
    );
  }
  else if (estadoJuego === "FACULTAD_ENTREVISTAS") {
    background(30);
    if (entrevistados[0] && entrevistados[1] && entrevistados[2]) {
      if (entrevistas.isPlaying()) entrevistas.stop();
      estadoJuego = "MONOLOGO_CAPI";
      reiniciarTexto();
      return;
    }

    tituloSeccion("Llegas a la facultad de Bellas Pelusas ¿A quién queres entrevistar?");
    image(pasillofonseca[0], 0, 0, width, height);
    if (pato.length > 0 && pato[0].width > 0) {
      image(pato[0], 20, 120, 320, 380);
    }
    else dibujarSiluetaFondo(90, 120, 180, 230, "Pato");

    if (murcielago.length > 0 && murcielago[0].width > 0) image(murcielago[0], 250, 120, 320, 380);
    else dibujarSiluetaFondo(310, 120, 180, 230, "Murciélago F.");

    if (lechuza.length > 0 && lechuza[0].width > 0) image(lechuza[0], 480, 120, 320, 380);
    else dibujarSiluetaFondo(530, 120, 180, 230, "Lechuza");

    dibujarBoton("Entrevistar a Pato", 90, 380, 180, 45);
    dibujarBoton("Entrevistar a Murcielago F.", 310, 380, 180, 45);
    dibujarBoton("Entrevistar a Lechuza", 550, 380, 180, 45); //dibuja botones de entrevistados
  }
  else if (estadoJuego === "DIALOGO_PATO") {
    image(pasillofonseca[0], 0, 0, width, height);
    manejarDialogoModular(dialogoPato, pato.length > 0 ? pato[0] : null);
  }
  else if (estadoJuego === "DIALOGO_MURCIELAGO") {
    image(pasillofonseca[0], 0, 0, width, height);
    let imgMurcielagoActual = indiceDialogo === 0 ? (murcielago.length > 0 ? murcielago[0] : null) : (murcielagollorando.length > 0 ? murcielagollorando[0] : null);
    manejarDialogoModular(dialogoMurcielago, imgMurcielagoActual);
  }
  else if (estadoJuego === "DIALOGO_LECHUZA") {
    image(pasillofonseca[0], 0, 0, width, height);
    manejarDialogoModular(dialogoLechuza, lechuza.length > 0 ? lechuza[0] : null);
  }
  else if (estadoJuego === "MONOLOGO_CAPI") {
    image(pasillofonseca[0], 0, 0, width, height);
    manejarDialogoModular(dialogoMonologoCapi, capi.length > 0 ? capi[0] : null);
  }
  else if (estadoJuego === "BUSCANDO_BONI") {
    image(pasillo[0], 0, 0, width, height);
    manejarDialogoModular(dialogoBuscandoBoni, null);
  }
  else if (estadoJuego === "BONI_INICIO") {
    image(pasillo[0], 0, 0, width, height);
    manejarDialogoModular(dialogoBoniInicio, boni.length > 0 ? boni[0] : null);
  }
  else if (estadoJuego === "MENU_BONI") {
    image(pasillo[0], 0, 0, width, height);
    if (preguntasBoni[0] && preguntasBoni[1]) {
      estadoJuego = "BONI_FINAL";
      reiniciarTexto();
      return;
    }

    if (boni.length > 0 && boni[0].width > 0) image(boni[0], 240, 100, 320, 380);
    tituloSeccion("¿Qué quieres preguntarle a Boñi?");

    dibujarBoton("Entregarle el moño y preguntarle por él", 100, 380, 280, 45);
    dibujarBoton("Exigirle una coartada", 420, 380, 280, 45);
  }
  else if (estadoJuego === "BONI_MONO") {
    image(pasillo[0], 0, 0, width, height);
    image(monio[0], 400, 350, width, height);
    manejarDialogoModular(dialogoBoniMono, boni.length > 0 ? boni[0] : null);
  }
  else if (estadoJuego === "BONI_COARTADA") {
    image(pasillo[0], 0, 0, width, height);
    if (nokia.length > 0 && nokia[0].width > 0) {
      push();
      imageMode(CENTER);
      image(nokia[0], width / 2, 250, 400, 400);
      pop();
    }
    manejarDialogoModular(dialogoBoniCoartada, null);
  }
  else if (estadoJuego === "BONI_FINAL") {
    image(pasillo[0], 0, 0, width, height);
    manejarDialogoModular(dialogoBoniFinal, boni.length > 0 ? boni[0] : null);
  }
  else if (estadoJuego === "TRANSICION_AFUERA") {
    image(pasillo[0], 0, 0, width, height);
    manejarDialogoModular(dialogoTransicionAfuera, capi.length > 0 ? capi[0] : null);
  }
  else if (estadoJuego === "MENU_PUESTOS") {
    image(puestos[0], 0, 0, width, height);
    if (capi.length > 0 && capi[0].width > 0) image(capi[0], 240, 100, 320, 380);

    tituloSeccion("¿A qué puesto vas a ir?");
    dibujarBoton("Ir al puesto de papas", 150, 380, 220, 45);
    dibujarBoton("Ir al puesto de panchos", 430, 380, 220, 45);
  }
  else if (estadoJuego === "PUESTO_PAPAS") {
    image(puestopapita[0], 0, 0, width, height);
    manejarDialogoModular(dialogoPuestoPapasOferta, papita.length > 0 ? papita[0] : null);
  }
  else if (estadoJuego === "MENU_ACEPTAR_PAPAS") {
    image(puestopapita[0], 0, 0, width, height);
    if (papita.length > 0 && papita[0].width > 0) image(papita[0], 240, 100, 320, 380);
    tituloSeccion("¿Aceptar la promo de papas?");
    dibujarBoton("Aceptarla", 200, 380, 180, 45);
    dibujarBoton("No aceptarla", 420, 380, 180, 45);
  }
  else if (estadoJuego === "GAME_OVER_PAPAS") {
    if (cumbiapapita.isPlaying()) cumbiapapita.stop();
    if (musicaseguida.isPlaying()) musicaseguida.stop();
    if (!guitarra.isPlaying()) guitarra.play();

    manejarDialogoModular(dialogoAceptarPapasGameOver, null);
  }
  else if (estadoJuego === "PANTALLA_GAME_OVER") {
    if (papas.length > 0 && papas[0].width > 0) {
      image(papas[0], 0, 0, width, height);
    } else {
      background(20, 0, 0);
    }
    tituloSeccion("Final: caso inconcluso");
    dibujarBoton("Volver a empezar", 275, 360, 250, 50);
  }
  else if (estadoJuego === "RECHAZAR_PAPAS") {
    image(puestos[0], 0, 0, width, height);
    manejarDialogoModular(dialogoRechazarPapas, capi.length > 0 ? capi[0] : null);
  }
  else if (estadoJuego === "PUESTO_PANCHOS") {
    let imgPityActual = indiceDialogo < 5 ? (pitypeluca.length > 0 ? pitypeluca[0] : null) : (pity.length > 0 ? pity[0] : null);
    image(puestos[0], 0, 0, width, height);
    manejarDialogoModular(dialogoPuestoPanchos, imgPityActual);
  }
  else if (estadoJuego === "MENU_FINALES") {
    if (cumbiapapita.isPlaying()) cumbiapapita.stop();
    image(puestos[0], 0, 0, width, height);
    if (pity.length > 0 && pity[0].width > 0) image(pity[0], 240, 100, 320, 380);

    tituloSeccion("¿Qué vas a hacer con Pity?");
    dibujarBoton("Llevar a Pity a la cárcel", 150, 380, 220, 45);
    dibujarBoton("Dejar ir a Pity", 430, 380, 220, 45);
  }
  else if (estadoJuego === "FINAL_CARCEL") {
    if (musicaseguida.isPlaying()) musicaseguida.stop();
    if (!yay.isPlaying()) yay.play();

    manejarDialogoModular(dialogoFinalCarcel, null);
  }
  else if (estadoJuego === "FINAL_DEJAR_IR") {
    if (musicaseguida.isPlaying()) musicaseguida.stop();
    if (!yay.isPlaying()) yay.play();

    image(pitylibre[0], 0, 0, width, height);
    manejarDialogoModular(dialogoFinalDejarIr, null);
  }
  else if (estadoJuego === "PANTALLA_FIN_CARCEL") {
    if (pitypresa.length > 0 && pitypresa[0].width > 0) {
      image(pitypresa[0], 0, 0, width, height);
    } else {
      background(20, 40, 20);
    }
    tituloSeccion("Final: Pity encerrada");
    dibujarBoton("Volver a empezar", 275, 360, 250, 50);
  }
  else if (estadoJuego === "PANTALLA_FIN_DEJAR_IR") {
    if (pitylibre.length > 0 && provisorio[0].width > 0) {
      image(pitylibre[0], 0, 0, width, height);
    } else {
      background(20, 20, 40);
    }
    tituloSeccion("Final: Pity libre");
    dibujarBoton("Volver a empezar", 275, 360, 250, 50);
  }
}

function reiniciarTexto() {
  indiceDialogo = 0;
  minTexto = 0;
  maxTexto = 0;
}

function manejarDialogoModular(arregloDialogos, imgPersonaje) {
  if (estadoJuego === "FINAL_CARCEL" && pitypresa.length > 0 && pitypresa[0].width > 0) {
    image(pitypresa[0], 0, 0, width, height);
  } else if (estadoJuego === "GAME_OVER_PAPAS" && provisorio.length > 0 && provisorio[0].width > 0) {
    image(provisorio[0], 0, 0, width, height);
  } else if (estadoJuego === "FINAL_DEJAR_IR" && provisorio.length > 0 && provisorio[0].width > 0) {
    image(pitylibre[0], 0, 0, width, height);
  }

  // Cada línea es un arreglo: 
  let lineaDialogo = arregloDialogos[indiceDialogo];
  let nombre = lineaDialogo[0];
  let texto = lineaDialogo[1];

  let imgActual = imgPersonaje;
  if ((estadoJuego === "GAME_OVER_PAPAS" || estadoJuego === "FINAL_DEJAR_IR" || estadoJuego === "FINAL_CARCEL")) {
    imgActual = null;
  }

  if (imgActual && imgActual.width > 0) {
    image(imgActual, 240, 100, 320, 380);
  }

  if (nombre.trim() !== "") {
    fill(80, 80, 80, 230);
    stroke(0);
    strokeWeight(2);
    rect(60, 260, 180, 30, 5);
    fill(255);
    noStroke();
    textSize(13);
    textStyle(BOLD);
    text(nombre, 75, 267);
    textStyle(NORMAL);
    textSize(14);
  }

  fill(40, 40, 40, 220);
  stroke(0);
  strokeWeight(2.5);
  rect(60, 295, 680, 120, 8);

  fill(240);
  noStroke();
  let textoMostrado = texto.substring(minTexto, maxTexto);
  text(textoMostrado, 80, 310, 620, 90);

  if (maxTexto < texto.length) {
    maxTexto += 0.8;
  }
}

function dibujarCajaTextoConBoton(nombreHablante, textoNarrativo, textoBoton) {
  if (nombreHablante && nombreHablante.trim() !== "") {
    fill(80, 80, 80, 230);
    stroke(0);
    strokeWeight(2);
    rect(60, 260, 180, 30, 5);
    fill(255);
    noStroke();
    textSize(13);
    textStyle(BOLD);
    text(nombreHablante, 75, 267);
    textStyle(NORMAL);
    textSize(14);
  }

  fill(40, 40, 40, 220);
  stroke(0);
  strokeWeight(2.5);
  rect(60, 295, 680, 120, 8);

  fill(240);
  noStroke();
  text(textoNarrativo, 80, 310, 620, 90);

  dibujarBoton(textoBoton, 250, 395, 300, 38);
}

function dibujarSiluetaFondo(x, y, w, h, nombre) {
  fill(50, 150);
  stroke(0);
  strokeWeight(2);
  rect(x, y, w, h, 8);
  fill(180);
  noStroke();
  textAlign(CENTER, CENTER);
  text("[" + nombre + "]", x + w / 2, y + h / 2);
  textAlign(LEFT, TOP);
}

function tituloSeccion(txt) {
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  text(txt, width / 2, 40);
  textSize(14);
  textAlign(LEFT, TOP);
}

function dibujarBoton(etiqueta, x, y, w, h) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    fill(180);
  } else {
    fill(220);
  }

  stroke(0);
  strokeWeight(2);
  rect(x, y, w, h, 8);

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(etiqueta, x + w / 2, y + h / 2);
  textAlign(LEFT, TOP);
}

function reinicioJuego() {
  if (musicaseguida.isPlaying()) musicaseguida.stop();
  if (entrevistas.isPlaying()) entrevistas.stop();
  if (cumbiapapita.isPlaying()) cumbiapapita.stop();
  if (guitarra.isPlaying()) guitarra.stop();
  if (yay.isPlaying()) yay.stop();

  estadoJuego = "PANTALLA_INICIO";
  logoY = -150;
  reiniciarTexto();
  entrevistados = [false, false, false];
  preguntasBoni = [false, false];
}

//Para los clicks
function mousePressed() {
  if (estadoJuego === "PANTALLA_INICIO") {
    estadoJuego = "INTRO";
    reiniciarTexto();
  }
  else if (estadoJuego === "INTRO") {
    let textoCompleto = dialogoIntroduccionCapi[indiceDialogo][1];
    if (maxTexto < textoCompleto.length) {
      maxTexto = textoCompleto.length;
    } else {
      indiceDialogo++;
      maxTexto = 0;
      if (indiceDialogo >= dialogoIntroduccionCapi.length) {
        estadoJuego = "ESCENA_CRIMEN";
        reiniciarTexto();
      }
    }
  }
  else if (estadoJuego === "ESCENA_CRIMEN") {
    if (mouseOver(250, 395, 300, 38)) {
      estadoJuego = "FACULTAD_ENTREVISTAS";
      reiniciarTexto();
    }
  }
  else if (estadoJuego === "FACULTAD_ENTREVISTAS") {
    reiniciarTexto();
    if (mouseOver(90, 380, 180, 45)) {
      entrevistados[0] = true; // pato
      estadoJuego = "DIALOGO_PATO";
      if (musicaseguida.isPlaying()) musicaseguida.stop();
      if (!entrevistas.isPlaying()) entrevistas.loop();
    }
    if (mouseOver(310, 380, 180, 45)) {
      entrevistados[1] = true; // murcielago
      estadoJuego = "DIALOGO_MURCIELAGO";
      if (musicaseguida.isPlaying()) musicaseguida.stop();
      if (!entrevistas.isPlaying()) entrevistas.loop();
    }
    if (mouseOver(550, 380, 180, 45)) {
      entrevistados[2] = true; // lechuza
      estadoJuego = "DIALOGO_LECHUZA";
      if (musicaseguida.isPlaying()) musicaseguida.stop();
      if (!entrevistas.isPlaying()) entrevistas.loop();
    }
  }
  else if (estadoJuego === "MENU_BONI") {
    reiniciarTexto();
    if (mouseOver(100, 380, 280, 45)) {
      preguntasBoni[0] = true; // mono
      estadoJuego = "BONI_MONO";
    } else if (mouseOver(420, 380, 280, 45)) {
      preguntasBoni[1] = true; // coartada
      estadoJuego = "BONI_COARTADA";
    }
  }
  else if (estadoJuego === "MENU_PUESTOS") {
    reiniciarTexto();
    if (mouseOver(150, 380, 220, 45)) {
      estadoJuego = "PUESTO_PAPAS";
      if (musicaseguida.isPlaying()) musicaseguida.stop();
      if (!cumbiapapita.isPlaying()) cumbiapapita.loop();
    }
    if (mouseOver(430, 380, 220, 45)) {
      estadoJuego = "PUESTO_PANCHOS";
    }
  }
  else if (estadoJuego === "MENU_ACEPTAR_PAPAS") {
    reiniciarTexto();
    if (mouseOver(200, 380, 180, 45)) {
      estadoJuego = "GAME_OVER_PAPAS";
    }
    if (mouseOver(420, 380, 180, 45)) {
      estadoJuego = "RECHAZAR_PAPAS";
      if (cumbiapapita.isPlaying()) cumbiapapita.stop();
    }
  }
  else if (estadoJuego === "MENU_FINALES") {
    reiniciarTexto();
    if (mouseOver(150, 380, 220, 45)) estadoJuego = "FINAL_CARCEL";
    if (mouseOver(430, 380, 220, 45)) estadoJuego = "FINAL_DEJAR_IR";
  }
  else if (estadoJuego === "PANTALLA_GAME_OVER" || estadoJuego === "PANTALLA_FIN_CARCEL" || estadoJuego === "PANTALLA_FIN_DEJAR_IR") {
    if (mouseOver(275, 360, 250, 50)) {
      reinicioJuego();
    }
  }
  else {
    let arregloActual;
    if (estadoJuego === "DIALOGO_PATO") arregloActual = dialogoPato;
    else if (estadoJuego === "DIALOGO_MURCIELAGO") arregloActual = dialogoMurcielago;
    else if (estadoJuego === "DIALOGO_LECHUZA") arregloActual = dialogoLechuza;
    else if (estadoJuego === "MONOLOGO_CAPI") arregloActual = dialogoMonologoCapi;
    else if (estadoJuego === "BUSCANDO_BONI") arregloActual = dialogoBuscandoBoni;
    else if (estadoJuego === "BONI_INICIO") arregloActual = dialogoBoniInicio;
    else if (estadoJuego === "BONI_MONO") arregloActual = dialogoBoniMono;
    else if (estadoJuego === "BONI_COARTADA") arregloActual = dialogoBoniCoartada;
    else if (estadoJuego === "BONI_FINAL") arregloActual = dialogoBoniFinal;
    else if (estadoJuego === "TRANSICION_AFUERA") arregloActual = dialogoTransicionAfuera;
    else if (estadoJuego === "PUESTO_PAPAS") arregloActual = dialogoPuestoPapasOferta;
    else if (estadoJuego === "GAME_OVER_PAPAS") arregloActual = dialogoAceptarPapasGameOver;
    else if (estadoJuego === "RECHAZAR_PAPAS") arregloActual = dialogoRechazarPapas;
    else if (estadoJuego === "PUESTO_PANCHOS") arregloActual = dialogoPuestoPanchos;
    else if (estadoJuego === "FINAL_CARCEL") arregloActual = dialogoFinalCarcel;
    else if (estadoJuego === "FINAL_DEJAR_IR") arregloActual = dialogoFinalDejarIr;

    if (arregloActual) {
      let textoCompleto = arregloActual[indiceDialogo][1];
      if (maxTexto < textoCompleto.length) {
        maxTexto = textoCompleto.length;
      } else {
        indiceDialogo++;
        maxTexto = 0;

        if (estadoJuego === "MONOLOGO_CAPI" && indiceDialogo >= arregloActual.length) {
          estadoJuego = "BUSCANDO_BONI";
          reiniciarTexto();
        } else if (estadoJuego === "BUSCANDO_BONI" && indiceDialogo >= arregloActual.length) {
          estadoJuego = "BONI_INICIO";
          reiniciarTexto();
        } else if (estadoJuego === "BONI_INICIO" && indiceDialogo >= arregloActual.length) {
          estadoJuego = "MENU_BONI";
          reiniciarTexto();
        } else if ((estadoJuego === "BONI_MONO" || estadoJuego === "BONI_COARTADA") && indiceDialogo >= arregloActual.length) {
          estadoJuego = "MENU_BONI";
          reiniciarTexto();
        } else if (estadoJuego === "BONI_FINAL" && indiceDialogo >= arregloActual.length) {
          estadoJuego = "TRANSICION_AFUERA";
          reiniciarTexto();
        } else if (estadoJuego === "TRANSICION_AFUERA" && indiceDialogo >= arregloActual.length) {
          estadoJuego = "MENU_PUESTOS";
          reiniciarTexto();
        } else if (estadoJuego === "PUESTO_PAPAS" && indiceDialogo >= arregloActual.length) {
          estadoJuego = "MENU_ACEPTAR_PAPAS";
          reiniciarTexto();
        } else if (estadoJuego === "GAME_OVER_PAPAS" && indiceDialogo >= arregloActual.length) {
          estadoJuego = "PANTALLA_GAME_OVER";
          reiniciarTexto();
        } else if (estadoJuego === "RECHAZAR_PAPAS" && indiceDialogo >= arregloActual.length) {
          estadoJuego = "PUESTO_PANCHOS";
          reiniciarTexto();
        } else if (estadoJuego === "PUESTO_PANCHOS" && indiceDialogo >= arregloActual.length) {
          estadoJuego = "MENU_FINALES";
          reiniciarTexto();
        } else if (estadoJuego === "FINAL_CARCEL" && indiceDialogo >= arregloActual.length) {
          estadoJuego = "PANTALLA_FIN_CARCEL";
          reiniciarTexto();
        } else if (estadoJuego === "FINAL_DEJAR_IR" && indiceDialogo >= arregloActual.length) {
          estadoJuego = "PANTALLA_FIN_DEJAR_IR";
          reiniciarTexto();
        } else if ((estadoJuego === "DIALOGO_PATO" || estadoJuego === "DIALOGO_MURCIELAGO" || estadoJuego === "DIALOGO_LECHUZA") && indiceDialogo >= arregloActual.length) {
          if (entrevistas.isPlaying()) entrevistas.stop();
          estadoJuego = "FACULTAD_ENTREVISTAS";
          reiniciarTexto();
        }
      }
    }
  }
}

function mouseOver(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}
