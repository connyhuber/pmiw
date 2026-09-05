//------ Variables
let imgFondo;
let imgCuadro; 
let animCaminar = [];
let animPosando = [];
let animSans = []; 
let animToby = []; 
let animCara = []; 
let estadoActual = "CAMINANDO";

//----- Posición y movimiento de Papyrus 
let posX = 1220;   
let posY = 240;   
let posDetencion = 400; // Frena cerca de S
let velocidadMov = 1.2;

//----- Posición de Sans 
let sansX = 250;   
let sansY = 290; //265
let frameIndexSans = 0;

//----- Posición de Toby 
let tobyX = 250;   
let tobyY = 365;   
let frameIndexToby = 0;

let frameIndex = 0;
let frameIndexCara = 0; 

let fuentePapyrus;

//---- Variables para el texto del dialogo
let caracteresVisibles = 0;
let velocidadEscritura = 80; // Milisegundos entre cada letra
let ultimoTiempoTexto = 0;
let ultimoTiempoPapyrus = 0;
let ultimoTiempoSans = 0;
let ultimoTiempoToby = 0;
let ultimoTiempoCara = 0;

let tiempoFinDialogo = 0;

function preload() {
 imgFondo = loadImage('data/fondo33.png');
 imgCuadro = loadImage('data/cuadro.png'); 

 animCaminar = cargarFrames('data/papyrus_', 4);
 animPosando = cargarFrames('data/pose_', 6);
 animSans = cargarFrames('data/sans_', 3);
 animToby = cargarFrames('data/toby_', 3); 
 animCara = cargarFrames('data/cara_', 2);

 fuentePapyrus = loadFont('data/papyrus.ttf');
 
}
function setup() {
 createCanvas(800, 600);
}

function draw() {
//----- Movimiento de Papyrus
 if (estadoActual === "CAMINANDO") {
 posX -= velocidadMov; 
 if (posX <= posDetencion) {
  estadoActual = "POSANDO";
  reiniciarAnimacion();
 }}

//----- Cambio de animación Papyrus
 let animActual;
 if (estadoActual === "CAMINANDO") {
 animActual = animCaminar;
 } else if (estadoActual === "POSANDO") {
 animActual = animPosando;
 }

//----- Camara que sigue a Papyrus (???
push();
let camaraX = width / 2 - posX; 
 camaraX = min(camaraX, 0); 
 translate(camaraX, 0);

//----- Dibuja fondo 
 image(imgFondo, 0, 0, width + 800, height);

//---- Dibuja Toby 
 dibujarToby(tobyX, tobyY, 2.5, 500); // 500 ms x frame

//---- Dibuja Sans 
 dibujarSans(sansX, sansY, 2.5, 600); // 600 ms x frame

 //---- Dibuja Papyrus
 dibujarPersonaje(animActual, posX, posY, 2.5, 120); // 120 ms por frame
 pop(); // Para camara,

//---- Dibuja el dialogo
 if (estadoActual === "POSANDO") {
 dibujarCuadroDialogo("¡SANS! ¡NO ESTAS AYUDANDO!\n¡VAGO!", 150); // 150 ms para mover boca
}
}

//---- Las funciones propias:
function cargarFrames(rutaBase, cantidad) {
 let arregloTemp = [];
 for (let i = 0; i < cantidad; i++) {
 let img = loadImage(rutaBase + i + '.png');
 arregloTemp.push(img);
 }
 return arregloTemp;
}

function dibujarPersonaje(arrayAnim, x, y, escala, velocidadAnim) {
 if (millis() - ultimoTiempoPapyrus > velocidadAnim) {
  frameIndex = (frameIndex + 1) % arrayAnim.length;
  ultimoTiempoPapyrus = millis();
 }
 let imgActual = arrayAnim[frameIndex];
 let anchoOriginal = imgActual.width * escala;
 let altoOriginal = imgActual.height * escala;
 imageMode(CORNER);
 image(imgActual, x, y, anchoOriginal, altoOriginal);
}

function dibujarSans(x, y, escala, velocidadAnim) {
 let imgActual;
 if (posX > 650) {
 imgActual = animSans[0];
 } else {
 if (millis() - ultimoTiempoSans > velocidadAnim) {
  frameIndexSans = (frameIndexSans === 1) ? 2 : 1;
  ultimoTiempoSans = millis();
 }
imgActual = animSans[frameIndexSans];
 }

 let anchoOriginal = imgActual.width * escala;
 let altoOriginal = imgActual.height * escala;
 imageMode(CORNER);
 image(imgActual, x, y, anchoOriginal, altoOriginal);
}

function dibujarToby(x, y, escala, velocidadAnim) {
 let imgActual;
 if (estadoActual === "CAMINANDO") {
 if (millis() - ultimoTiempoToby > velocidadAnim) {
  frameIndexToby = (frameIndexToby === 0) ? 1 : 0;
  ultimoTiempoToby = millis();
 }
 imgActual = animToby[frameIndexToby];
 }else{
 imgActual = animToby[2];
 }

 let anchoOriginal = imgActual.width * escala;
 let altoOriginal = imgActual.height * escala;
 imageMode(CORNER);
 image(imgActual, x, y, anchoOriginal, altoOriginal);
}

//---- el dialogo sincronizado con la boca!
function dibujarCuadroDialogo(textoCompleto, velHabla) {
 push();
 imageMode(CORNER);
 let cajaX = 100;
 let cajaY = 430;
 image(imgCuadro, cajaX, cajaY, 600, 150); 

 // El tipeo de las letras
 if (millis() - ultimoTiempoTexto > velocidadEscritura && caracteresVisibles < textoCompleto.length) {
  caracteresVisibles++;
  ultimoTiempoTexto = millis();
 }

 let textoParcial = textoCompleto.substring(0, caracteresVisibles);
 let estaHablando = caracteresVisibles < textoCompleto.length;

// Animación de la cara para que solo se mueva la boca mientras se escribe el dialogo:
 if (estaHablando) {
 // Movimiento de la boca...
 if (millis() - ultimoTiempoCara > velHabla) {
  frameIndexCara = (frameIndexCara + 1) % animCara.length;
  ultimoTiempoCara = millis();
 }
 tiempoFinDialogo = millis(); 
 }else{
 frameIndexCara = 0; // Boca cerrada!!
 
//Cuando termina de hablar y pasan 2400 ms, se reinicia todo
if (millis() - tiempoFinDialogo > 2400) {
resetearEscena();
}}

 let imgCara = animCara[frameIndexCara];
 let escalaCara = 2.3;
 let anchoCara = imgCara.width * escalaCara;
 let altoCara = imgCara.height * escalaCara;
 image(imgCara, cajaX + 35, cajaY + 26, anchoCara, altoCara);

 //---- Escribe el dialogo
 fill(255);
 noStroke();
 textSize(22);
 textAlign(LEFT, TOP);
 font = fuentePapyrus;
 textFont(fuentePapyrus);
 text(textoParcial, cajaX + 140, cajaY + 40); //posiciona el texto
 pop();
}

function reiniciarAnimacion() {
 frameIndex = 0;
 frameIndexSans = 1;
 frameIndexToby = 0;
 frameIndexCara = 0;
 caracteresVisibles = 0; // Reinicia el contador del texto
 ultimoTiempoTexto = millis();
 ultimoTiempoPapyrus = millis();
 ultimoTiempoSans = millis();
 ultimoTiempoToby = millis();
 ultimoTiempoCara = millis();
}

// Función para reiniciar!!
function resetearEscena() {
 posX = 1220; // posición inicial
 estadoActual = "CAMINANDO";
 reiniciarAnimacion();
}
