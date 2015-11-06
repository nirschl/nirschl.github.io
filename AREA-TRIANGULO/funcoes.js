function fler() {
var b = document.getElementById("base").value;
var a = document.getElementById("altura").value;

//VARIÁVEIS DECLARADAS NA FUNÇÃO SÃO SEMPRE LOCAIS E SÓ FUNCIONAM DENTRO DELA
//a e b ACIMA ESTÃO DECLARADAS, PORTANTO SÃO LOCAIS
//SE EU QUISER QUE ELAS SEJAM GLOBAIS, É SÓ NÃO COLOCAR O VAR

area=b*a/2
bb=b //PARA TRANSFORMAR DE LOCAL PARA GLOBAL
aa=a //PARA TRANSFORMAR DE LOCAL PARA GLOBAL
impressao='A área do triângulo é: '+area
+'\r\nObs: programa em desenvolvimento.'
}

function farea() {
	fler();
	document.getElementById("darea").innerHTML = area;
}

function fpdf() {
fler();
var docDefinition = { content: impressao};
pdfMake.createPdf(docDefinition).open(); <!--ABRE NUMA OUTRA ABA-->
}

function ffile(filename) {
        fler();
		var a = document.createElement('a');
        contentType =  'data:application/octet-stream,';
        uriContent = contentType + encodeURIComponent(impressao);
        a.setAttribute('href', uriContent);
        a.setAttribute('download', filename);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
}

function fdxf(filename) {
		fler();
cabecalhodxf='999'+
'\r\nDXF CRIADO POR PROGRAMA TUBULARES'+
'\r\n0'+
'\r\nSECTION'+
'\r\n2'+
'\r\nHEADER'+
'\r\n9'+
'\r\n$ACADVER'+
'\r\n1'+
'\r\nAC1006'+
'\r\n9'+
'\r\n$INSBASE'+
'\r\n10'+
'\r\n0.0'+
'\r\n20'+
'\r\n0.0'+
'\r\n30'+
'\r\n0.0'+
'\r\n9'+
'\r\n$EXTMIN'+
'\r\n10'+
'\r\n0.0'+
'\r\n20'+
'\r\n0.0'+
'\r\n9'+
'\r\n$EXTMAX'+
'\r\n10'+
'\r\n1000.0'+
'\r\n20'+
'\r\n1000.0'+
'\r\n9'+
'\r\n$LIMMIN'+
'\r\n10'+
'\r\n0.0'+
'\r\n20'+
'\r\n0.0'+
'\r\n9'+
'\r\n$LIMMAX'+
'\r\n10'+
'\r\n100.0'+
'\r\n20'+
'\r\n100.0'+
'\r\n0'+
'\r\nENDSEC'+
'\r\n0'+
'\r\nSECTION'+
'\r\n2'+
'\r\nTABLES'+
'\r\n0'+
'\r\nTABLE'+
'\r\n2'+
'\r\nVPORT'+
'\r\n70'+
'\r\n1'+
'\r\n0'+
'\r\nVPORT'+
'\r\n2'+
'\r\n*ACTIVE'+
'\r\n70'+
'\r\n0'+
'\r\n10'+
'\r\n0.0'+
'\r\n20'+
'\r\n0.0'+
'\r\n11'+
'\r\n1.0'+
'\r\n21'+
'\r\n1.0'+
'\r\n12'+
'\r\n25.0'+
'\r\n22'+
'\r\n-10.0'+
'\r\n13'+
'\r\n0.0'+
'\r\n23'+
'\r\n0.0'+
'\r\n14'+
'\r\n1.0'+
'\r\n24'+
'\r\n1.0'+
'\r\n15'+
'\r\n0.0'+
'\r\n25'+
'\r\n0.0'+
'\r\n16'+
'\r\n0.0'+
'\r\n26'+
'\r\n0.0'+
'\r\n36'+
'\r\n1.0'+
'\r\n17'+
'\r\n0.0'+
'\r\n27'+
'\r\n0.0'+
'\r\n37'+
'\r\n0.0'+
'\r\n40'+
'\r\n10.0'+
'\r\n41'+
'\r\n10.0'+
'\r\n42'+
'\r\n50.00'+
'\r\n43'+
'\r\n0.0'+
'\r\n44'+
'\r\n0.0'+
'\r\n50'+
'\r\n0.0'+
'\r\n51'+
'\r\n0.0'+
'\r\n71'+
'\r\n0.0'+
'\r\n72'+
'\r\n100'+
'\r\n73'+
'\r\n1.0'+
'\r\n74'+
'\r\n1.0'+
'\r\n75'+
'\r\n0.0'+
'\r\n76'+
'\r\n0.0'+
'\r\n77'+
'\r\n0.0'+
'\r\n78'+
'\r\n0.0'+
'\r\n0'+
'\r\nENDTAB'+
'\r\n0'+
'\r\nTABLE'+
'\r\n2'+
'\r\nLTYPE'+
'\r\n70'+
'\r\n1'+
'\r\n0'+
'\r\nLTYPE'+
'\r\n2'+
'\r\nCONTINUOUS'+
'\r\n70'+
'\r\n64'+
'\r\n3'+
'\r\nSolid line'+
'\r\n72'+
'\r\n65'+
'\r\n73'+
'\r\n0'+
'\r\n40'+
'\r\n0.000000'+
'\r\n0'+
'\r\nENDTAB'+
'\r\n0'+
'\r\nTABLE'+
'\r\n2'+
'\r\nLAYER'+
'\r\n70'+
'\r\n6'+
'\r\n0'+
'\r\nLAYER'+
'\r\n2'+
'\r\nTUBULARES_1'+
'\r\n70'+
'\r\n64'+
'\r\n62'+
'\r\n7'+
'\r\n6'+
'\r\nCONTINUOUS'+
'\r\n0'+
'\r\nENDTAB'+
'\r\n0'+
'\r\nTABLE'+
'\r\n2'+
'\r\nSTYLE'+
'\r\n70'+
'\r\n0'+
'\r\n0'+
'\r\nENDTAB'+
'\r\n0'+
'\r\nTABLE'+
'\r\n2'+
'\r\nSTYLE'+
'\r\n70'+
'\r\n2'+
'\r\n0'+
'\r\nSTYLE'+
'\r\n2'+
'\r\nESTILO_ARIAL'+
'\r\n70'+
'\r\n0'+
'\r\n40'+
'\r\n0.0'+
'\r\n41'+
'\r\n1.0'+
'\r\n50'+
'\r\n0.0'+
'\r\n71'+
'\r\n0.0'+
'\r\n42'+
'\r\n0.2'+
'\r\n3'+
'\r\nARIAL'+
'\r\n4'+
'\r\n'+
'\r\n0'+
'\r\nENDTAB'+
'\r\n0'+
'\r\nENDSEC'+
'\r\n0'+
'\r\nSECTION'+
'\r\n2'+
'\r\nBLOCKS'+
'\r\n0'+
'\r\nENDSEC'
desenhosdxf='\r\n0'+
'\r\nSECTION'+
'\r\n2'+
'\r\nENTITIES'+
'\r\n0'+
'\r\nLINE'+
'\r\n8'+
'\r\nTUBULARES_1'+
'\r\n62'+
'\r\n4'+
'\r\n10'+
'\r\n0.0'+
'\r\n20'+
'\r\n0.0'+
'\r\n30'+
'\r\n0.0'+
'\r\n11'+
'\r\n'+bb+
'\r\n21'+
'\r\n0.0'+
'\r\n31'+
'\r\n0.0'+
'\r\n0'+
'\r\nLINE'+
'\r\n8'+
'\r\nTUBULARES_1'+
'\r\n62'+
'\r\n4'+
'\r\n10'+
'\r\n0.0'+
'\r\n20'+
'\r\n0.0'+
'\r\n30'+
'\r\n0.0'+
'\r\n11'+
'\r\n0.0'+
'\r\n21'+
'\r\n'+aa+
'\r\n31'+
'\r\n0.0'+
'\r\n0'+
'\r\nLINE'+
'\r\n8'+
'\r\nTUBULARES_1'+
'\r\n62'+
'\r\n4'+
'\r\n10'+
'\r\n0.0'+
'\r\n20'+
'\r\n'+aa+
'\r\n30'+
'\r\n0.0'+
'\r\n11'+
'\r\n'+bb+
'\r\n21'+
'\r\n0.0'+
'\r\n31'+
'\r\n0.0'
fimdxf='999'+
'\r\n0'+
'\r\nENDSEC'+
'\r\n0'+
'\r\nEOF'
		var a = document.createElement('a');
        contentType =  'data:application/octet-stream,';
        uriContent = contentType + encodeURIComponent(cabecalhodxf+desenhosdxf+fimdxf);
        a.setAttribute('href', uriContent);
        a.setAttribute('download', filename);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
}






