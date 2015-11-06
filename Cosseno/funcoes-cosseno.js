function fcos() { // resolve o cos(x) //
	ang = document.getElementById("angulo").value;
	
	//COSSENO EXATO
	angr=(ang/180)*(Math.PI) //conversão para radianos
	cos=Math.cos(angr)
	document.getElementById("dcos").innerHTML = cos;
	
	//POLINÔMIO DE MCLAURIN
	n = document.getElementById("nvezes").value;
	n=n-1; //para considerar o zero
	angr=(ang/180)*(Math.PI) //conversão para radianos
	termo=[]; //variável com cada termo do polinômio
	imp=''; //variável com a impressão de todos os termos do polinômio
	m=0;
	for (i = 0; i <= n; i++) {
	termo[i]=((Math.pow(-1,i))*((Math.pow(angr,2*i))/(fatorial(2*i)))); //variável com o termo "i" do polinômio
    m=m+termo[i];
	imp=imp+'\r\nTermo '+i+' = ((-1)^'+i+')*('+angr+'^('+2*i+'))/(2*'+i+')! = \r\n'+termo[i].toPrecision(2); 
	}
    document.getElementById("demo").innerHTML = m;
	erro=(cos-m)
	document.getElementById("derro").innerHTML = erro.toPrecision(1); //imprime com 1 algarismo significativo
} 

function fatorial(num){ // função fatorial
    if(num>20) {
		document.getElementById("demo").innerHTML = "limite do fatorial atingido";
		document.getElementById("derro").innerHTML = "limite do fatorial atingido";
		alert("limite do fatorial atingido");
		exit; }
	if(num > 1)
      return num * arguments.callee(num - 1);
    else 
      return 1;
  } 

function fpdf() { //VER ESTE SITE PARA ESTILOS DO PDF - https://github.com/bpampuch/pdfmake
fcos();
var docDefinition = { content: 
[ 
{
text:
'\r\nÂngulo x (graus) = '+ang
+'\r\n\r\nÂngulo x (radianos) = '+angr
},

{
text:
'\r\nCos(x) exato = '+cos, bold: true
},

{
text:
'\r\nPolinômio de McLaurin:'
},

{
//Mclaurin.jpg EM http://dopiaza.org/tools/datauri/index.php. O site já dá o abaixo ‘(...)‘:
image:'data:image/jpeg;base64,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',
width: 150,
alignment: 'left',
},
{
text:
'\r\nNúmero de termos = '+(n+1)
+'\r\n'+imp
},

{
text:
'\r\nSomatório dos termos = cos(x) aproximado = P(x) = '+m, bold: true
},

{
text:
'\r\nErro = '+erro.toPrecision(1)
+'\r\n\r\n\r\nREFERÊNCIAS BIBLIOGRÁFICAS'
+'\r\n\r\nQUADROS, Régis S. de; BORTOLI, Álvaro L. de. Fundamentos de Cálculo Numérico para Engenheiros. Porto Alegre, 2009. Disponível em < http://www.inf.ufrgs.br/~rlflupchinski/files/20112/NUMERICO/numerico-bortoli.pdf >. Acesso em outubro de 2014.'
},
]
}
pdfMake.createPdf(docDefinition).open(); //ABRE NUMA OUTRA ABA//
} 
  



