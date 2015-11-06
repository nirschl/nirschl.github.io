function fcanvas () {
fler(); // LÊ AS VARIÁVEIS 
fclearcanvas (); //limpa a tela
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// LINHAS DA SEÇÃO
ctx.beginPath();
ctx.strokeStyle = '#000000'; //cor preta
ctx.lineWidth = 2; //espessura da linha
pt3x=500
pt3y=250
pt1x=500
pt1y=150
ctx.moveTo(pt3x, pt3y); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ctx.lineTo(pt1x, pt1y); // altura da seção fixa em 100 (escala e = 100/a)
e=100/a
le=(b*e)*(2/3) // largura desenho: perspectiva cavaleira (2/3 do valor)
inx=le*0.866 // incremento em x = le*cos30 (cavaleira)
iny=le*0.5 // incremento em y = le*sen30 (cavaleira)
pt4x=500+inx
pt4y=250-iny
pt2x=500+inx
pt2y=150-iny
ctx.moveTo(pt4x, pt4y); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ctx.lineTo(pt2x, pt2y); // altura da seção fixa em 100
ctx.moveTo(pt1x, pt1y);
ctx.lineTo(pt2x, pt2y);
ctx.moveTo(pt3x, pt3y);
ctx.lineTo(pt4x, pt4y);
ctx.stroke(); //finaliza os desenhos com as cores e espessura fixada

//parâmetros seção
area=a*b
ix=b*Math.pow(a,3)/12 //inércia em torno de x
iy=a*Math.pow(b,3)/12 //inércia em torno de y

//CÁLCULO DAS TENSÕES
s1=(en/area)+((mx/ix)*(-a/2))+((my/iy)*(b/2)) //SUPERIOR ESQUERDO
s2=(en/area)+((mx/ix)*(-a/2))+((my/iy)*(-b/2)) //SUPERIOR DIREITO
s3=(en/area)+((mx/ix)*(a/2))+((my/iy)*(b/2)) //INFERIOR ESQUERDO
s4=(en/area)+((mx/ix)*(a/2))+((my/iy)*(-b/2)) //INFERIOR DIREITO

//achar a máxima tensão em módulo, para efeito de escala
ms=Math.max(Math.abs(s1),Math.abs(s2),Math.abs(s3),Math.abs(s4))
et=100/ms // maior esforço fixo em 100 (escala tensões et = 100/ms)

//DESENHO DAS TENSÕES
// TENSÃO S1
ctx.beginPath(); //recomeça desenhos com outros estilos
if (s1<0) {
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
pt=-65 //posição do texto
} else { 
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
pt=+35 //posição do texto
}
ctx.lineWidth = 2; //espessura da linha
ctx.moveTo(pt1x, pt1y); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ps1x=pt1x+(s1*et)
ps1y=pt1y
ctx.lineTo(ps1x, ps1y); //+ porque compressão já tem tensão negativa
ctx.font="14px Arial";
ts1=s1.toPrecision(5)
ctx.fillText(ts1,ps1x+pt, ps1y);
ctx.stroke();
// TENSÃO S2
ctx.beginPath(); //recomeça desenhos com outros estilos
if (s2<0) {
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
pt=-65 //posição do texto
} else { 
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
pt=+35 //posição do texto
}
ctx.lineWidth = 2; //espessura da linha
ctx.moveTo(pt2x, pt2y); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ps2x=pt2x+(s2*et)
ps2y=pt2y
ctx.lineTo(ps2x, ps2y); //+ porque compressão já tem tensão negativa
ctx.font="14px Arial";
ts2=s2.toPrecision(5)
ctx.fillText(ts2,ps2x+pt, ps2y);
ctx.stroke();
// TENSÃO S3
ctx.beginPath(); //recomeça desenhos com outros estilos
if (s3<0) {
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
pt=-65 //posição do texto
} else { 
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
pt=+35 //posição do texto
}
ctx.lineWidth = 2; //espessura da linha
ctx.moveTo(pt3x, pt3y); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ps3x=pt3x+(s3*et)
ps3y=pt3y
ctx.lineTo(ps3x, ps3y); //+ porque compressão já tem tensão negativa
ctx.font="14px Arial";
ts3=s3.toPrecision(5)
ctx.fillText(ts3,ps3x+pt, ps3y);
ctx.stroke();
// TENSÃO S4
ctx.beginPath(); //recomeça desenhos com outros estilos
if (s4<0) {
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
pt=-65 //posição do texto
} else { 
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
pt=+35 //posição do texto
}
ctx.lineWidth = 2; //espessura da linha
ctx.moveTo(pt4x, pt4y); //coordenada local (dentro da área delimitada); cresce x direita e y para baixo
ps4x=pt4x+(s4*et)
ps4y=pt4y
ctx.lineTo(ps4x, ps4y); //+ porque compressão já tem tensão negativa
ctx.font="14px Arial";
ts4=s4.toPrecision(5)
ctx.fillText(ts4,ps4x+pt, ps4y);
ctx.stroke();

//DESENHO DAS LINHAS DE BORDA
pln=0 //pontos da linha neutra desenhados

//DESENHO DA LINHA S1 A S3 (x=b/2)
if (s1 <= 0 && s3 <= 0) {
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
ctx.moveTo(ps1x, ps1y);
ctx.lineTo(ps3x, ps3y);
ctx.stroke();
} 
if (s1 >= 0 && s3 >= 0) {
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
ctx.moveTo(ps1x, ps1y);
ctx.lineTo(ps3x, ps3y);
ctx.stroke();
} 
if (s1 <= 0 && s3 >= 0) {
dy=((Math.abs(s1)*a)/(Math.abs(s1)+Math.abs(s3)))*e //quanto desce em y (posição da LN 1-3), já na escala (semelhança triângulos)
pln13x=pt1x
pln13y=pt1y+dy
plnax=pln13x
plnay=pln13y
pln=1
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
ctx.moveTo(ps1x, ps1y);
ctx.lineTo(pln13x, pln13y);
ctx.stroke();
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
ctx.moveTo(pln13x, pln13y);
ctx.lineTo(ps3x, ps3y);
ctx.stroke();
} 
if (s1 >= 0 && s3 <= 0) {
dy=((Math.abs(s1)*a)/(Math.abs(s1)+Math.abs(s3)))*e //quanto desce em y (posição da LN 1-3), já na escala (semelhança triângulos)
pln13x=pt1x
pln13y=pt1y+dy
plnax=pln13x
plnay=pln13y
pln=1
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
ctx.moveTo(ps1x, ps1y);
ctx.lineTo(pln13x, pln13y);
ctx.stroke();
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
ctx.moveTo(pln13x, pln13y);
ctx.lineTo(ps3x, ps3y);
ctx.stroke();
} 

//DESENHO DA LINHA S2 A S4 (x=-b/2)
if (s2 <= 0 && s4 <= 0) {
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
ctx.moveTo(ps2x, ps2y);
ctx.lineTo(ps4x, ps4y);
ctx.stroke();
} 
if (s2 >= 0 && s4 >= 0) {
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
ctx.moveTo(ps2x, ps2y);
ctx.lineTo(ps4x, ps4y);
ctx.stroke();
} 
if (s2 <= 0 && s4 >= 0) {
dy=((Math.abs(s2)*a)/(Math.abs(s2)+Math.abs(s4)))*e //quanto desce em y (posição da LN 2-4), já na escala (semelhança triângulos)
pln24x=pt2x
pln24y=pt2y+dy
if (pln == 0) {
plnax=pln24x
plnay=pln24y
pln=1
} else {
plnbx=pln24x
plnby=pln24y
pln=2
}
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
ctx.moveTo(ps2x, ps2y);
ctx.lineTo(pln24x, pln24y);
ctx.stroke();
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
ctx.moveTo(pln24x, pln24y);
ctx.lineTo(ps4x, ps4y);
ctx.stroke();
} 
if (s2 >= 0 && s4 <= 0) {
dy=((Math.abs(s2)*a)/(Math.abs(s2)+Math.abs(s4)))*e //quanto desce em y (posição da LN 2-4), já na escala (semelhança triângulos)
pln24x=pt2x
pln24y=pt2y+dy
if (pln == 0) {
plnax=pln24x
plnay=pln24y
pln=1
} else {
plnbx=pln24x
plnby=pln24y
pln=2
}
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
ctx.moveTo(ps2x, ps2y);
ctx.lineTo(pln24x, pln24y);
ctx.stroke();
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
ctx.moveTo(pln24x, pln24y);
ctx.lineTo(ps4x, ps4y);
ctx.stroke();
}

//DESENHO DA LINHA S1 A S2 (y=-a/2)
if (s1 <= 0 && s2 <= 0) {
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
ctx.moveTo(ps1x, ps1y);
ctx.lineTo(ps2x, ps2y);
ctx.stroke();
} 
if (s1 >= 0 && s2 >= 0) {
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
ctx.moveTo(ps1x, ps1y);
ctx.lineTo(ps2x, ps2y);
ctx.stroke();
} 
if (s1 <= 0 && s2 >= 0) {
dx=((Math.abs(s1)*b)/(Math.abs(s1)+Math.abs(s2)))*e*(2/3) //quanto entra em x (posição da LN 1-2), já na escala (semelhança triângulos)
pln12x=pt1x+dx*0.866 //cavaleira
pln12y=pt1y-dx*0.5 //cavaleira
if (pln == 0) {
plnax=pln12x
plnay=pln12y
pln=1
} else {
plnbx=pln12x
plnby=pln12y
pln=2
}
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
ctx.moveTo(ps1x, ps1y);
ctx.lineTo(pln12x, pln12y);
ctx.stroke();
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
ctx.moveTo(pln12x, pln12y);
ctx.lineTo(ps2x, ps2y);
ctx.stroke();
} 
if (s1 >= 0 && s2 <= 0) {
dx=((Math.abs(s1)*b)/(Math.abs(s1)+Math.abs(s2)))*e*(2/3) //quanto entra em x (posição da LN 1-2), já na escala (semelhança triângulos)
pln12x=pt1x+dx*0.866 //cavaleira
pln12y=pt1y-dx*0.5 //cavaleira
if (pln == 0) {
plnax=pln12x
plnay=pln12y
pln=1
} else {
plnbx=pln12x
plnby=pln12y
pln=2
}
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
ctx.moveTo(ps1x, ps1y);
ctx.lineTo(pln12x, pln12y);
ctx.stroke();
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
ctx.moveTo(pln12x, pln12y);
ctx.lineTo(ps2x, ps2y);
ctx.stroke();
} 

//DESENHO DA LINHA S3 A S4 (y=a/2)
if (s3 <= 0 && s4 <= 0) {
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
ctx.moveTo(ps3x, ps3y);
ctx.lineTo(ps4x, ps4y);
ctx.stroke();
} 
if (s3 >= 0 && s4 >= 0) {
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
ctx.moveTo(ps3x, ps3y);
ctx.lineTo(ps4x, ps4y);
ctx.stroke();
} 
if (s3 <= 0 && s4 >= 0) {
dx=((Math.abs(s3)*b)/(Math.abs(s3)+Math.abs(s4)))*e*(2/3) //quanto entra em x (posição da LN 1-2), já na escala (semelhança triângulos)
pln34x=pt3x+dx*0.866 //cavaleira
pln34y=pt3y-dx*0.5 //cavaleira
if (pln == 0) {
plnax=pln34x
plnay=pln34y
pln=1
} else {
plnbx=pln34x
plnby=pln34y
pln=2
}
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
ctx.moveTo(ps3x, ps3y);
ctx.lineTo(pln34x, pln34y);
ctx.stroke();
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
ctx.moveTo(pln34x, pln34y);
ctx.lineTo(ps4x, ps4y);
ctx.stroke();
} 
if (s3 >= 0 && s4 <= 0) {
dx=((Math.abs(s3)*b)/(Math.abs(s3)+Math.abs(s4)))*e*(2/3) //quanto entra em x (posição da LN 1-2), já na escala (semelhança triângulos)
pln34x=pt3x+dx*0.866 //cavaleira
pln34y=pt3y-dx*0.5 //cavaleira
if (pln == 0) {
plnax=pln34x
plnay=pln34y
pln=1
} else {
plnbx=pln34x
plnby=pln34y
pln=2
}
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#FF0000'; //cor vermelha (tração)
ctx.moveTo(ps3x, ps3y);
ctx.lineTo(pln34x, pln34y);
ctx.stroke();
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#0000FF'; //cor azul (compressão)
ctx.moveTo(pln34x, pln34y);
ctx.lineTo(ps4x, ps4y);
ctx.stroke();
} 

//DESENHAR A LINHA NEUTRA (se houver)
if (pln > 0) {
ctx.beginPath(); //recomeça desenhos com outros estilos
ctx.strokeStyle = '#C0C0C0'; //cor PRATA
ctx.moveTo(plnax, plnay);
ctx.lineTo(plnbx, plnby);
ctx.stroke();
}

// TAMANHO DA TELA
ctx.beginPath();
ctx.font="20px Arial";
ctx.fillText("TENSÕES (kgf/cm2)",20,20);
ctx.stroke();
}

function fclearcanvas () {
var c = document.getElementById("myCanvas");
c.width = 1000;
c.height = 300;
}