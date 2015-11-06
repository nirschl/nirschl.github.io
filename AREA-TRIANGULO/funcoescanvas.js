function fcanvas () {
fler();
fclearcanvas ();
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(500, 150); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ctx.lineTo(500-(-bb), 150); //base - NÃO SEI POR QUE NÃO ACEITA +
ctx.moveTo(500, 150);
ctx.lineTo(500, 150-aa); //altura
ctx.moveTo(500, 150-aa);
ctx.lineTo(500-(-bb), 150); //hipotenusa - NÃO SEI POR QUE NÃO ACEITA +
ctx.stroke();
ctx.font="20px Arial";
ctx.fillText("Tela 1000x300",20,20);
}

function fclearcanvas () {
var c = document.getElementById("myCanvas");
c.width = 1000;
c.height = 300;
}