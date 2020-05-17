var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
cuadrito.addEventListener("mousedown", dibujarPunto);
cuadrito.addEventListener("mousemove", dibujarMouse);
cuadrito.addEventListener("mouseup", pararDibujo);

var clickPresionado;

var papel = cuadrito.getContext("2d");
var x;
var y;

// Aqui se dibuja el borde del Canvas
dibujarLinea("black", 0,0,0,300, papel, 1);
dibujarLinea("black", 0,300,300,300, papel, 1);
dibujarLinea("black", 0,0,300,0, papel, 1);
dibujarLinea("black", 300,0,300,300, papel, 1);


function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo, ancho)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = ancho;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{

  /*if(evento.keyCode == teclas.UP) {
    console.log("Vamo' pa arriba");
  } else if (evento.keyCode == teclas.DOWN) {
    console.log("Vamo' pa abajo");
  } else if (evento.keyCode == teclas.LEFT) {
    console.log("Vamo' pa la izquierda");
  } else if (evento.keyCode == teclas.RIGHT) {
    console.log("Vamo' pa la derecha");
  }*/

  var colorcito = "green";
  var movimiento = 1;
  switch (evento.keyCode)
  {
    case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
    break;
    case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
    break;
    case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
    break;
    case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
    break;
  }
}

//Sigue los movimientos del mouse
function dibujarPunto(evento)
{
  //console.log("Mouse presionado");
  console.log("Posicion X: " + evento.offsetX);
  console.log("Posicion Y: " + evento.offsetY);
  x = evento.offsetX;
  y = evento.offsetY;
  clickPresionado = true;
}

function dibujarMouse(evento)
{

  if (clickPresionado)
  {
    dibujarLinea("blue", x, y, evento.offsetX, evento.offsetY, papel, 1);
    x = evento.offsetX;
    y = evento.offsetY;
  }
}

function pararDibujo(evento)
{
  if (clickPresionado) {
    dibujarLinea("blue", x, y, evento.offsetX, evento.offsetY, papel, 1);
    x = 0;
    y = 0;
    clickPresionado = false;
  }
}
