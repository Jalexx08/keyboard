let pantalla = document.getElementById('pantalla');

//* Teclas

let btnEsc = document.getElementById('btnEsc'); 
let btnGrado = document.getElementById('btnGrado'); 
let btn1 = document.getElementById('btn1'); 
let btn2 = document.getElementById('btn2'); 
let btn3 = document.getElementById('btn3'); 
let btn4 = document.getElementById('btn4'); 
let btn5 = document.getElementById('btn5'); 
let btn6 = document.getElementById('btn6'); 
let btn7 = document.getElementById('btn7'); 
let btn8 = document.getElementById('btn8'); 
let btn9 = document.getElementById('btn9'); 
let btn0 = document.getElementById('btn0'); 
let btnTick = document.getElementById('btnTick'); 
let btnAO = document.getElementById('btnAO'); 
let btnBack = document.getElementById('btnBack'); 
let btntab = document.getElementById('btntab'); 
let btnq = document.getElementById('btnq'); 
let btnw = document.getElementById('btnw'); 
let btne = document.getElementById('btne'); 
let btnr = document.getElementById('btnr'); 
let btnt = document.getElementById('btnt'); 
let btny = document.getElementById('btny'); 
let btnu = document.getElementById('btnu'); 
let btni = document.getElementById('btni'); 
let btno = document.getElementById('btno'); 
let btnp = document.getElementById('btnp'); 
let btnBtick = document.getElementById('btnBtick'); 
let btnEnter = document.getElementById('btnEnter'); 
let btnmayus = document.getElementById('btnmayus'); 
let btna = document.getElementById('btna'); 
let btns = document.getElementById('btns'); 
let btnd = document.getElementById('btnd'); 
let btnf = document.getElementById('btnf'); 
let btng = document.getElementById('btng'); 
let btnh = document.getElementById('btnh'); 
let btnj = document.getElementById('btnj'); 
let btnk = document.getElementById('btnk'); 
let btnl = document.getElementById('btnl'); 
let btnN = document.getElementById('btnN'); 
let btnShift = document.getElementById('btnShift'); 
let btnMenor = document.getElementById('btnMenor'); 
let btnz = document.getElementById('btnz'); 
let btnx = document.getElementById('btnx'); 
let btnc = document.getElementById('btnc'); 
let btnv = document.getElementById('btnv'); 
let btnb = document.getElementById('btnb'); 
let btnn = document.getElementById('btnn'); 
let btnm = document.getElementById('btnm'); 
let btnComa = document.getElementById('btnComa'); 
let btnPunto = document.getElementById('btnPunto'); 
let btnGuion = document.getElementById('btnGuion'); 
let btnSpace = document.getElementById('btnSpace'); 

let texto = "";

//*  Funciones

const btnEscF = ()=>{
    texto +=btnEsc.innerText;
    pantalla.innerText =texto;
};
const btnGradoF = ()=>{
    texto +=btnGrado.innerText;
    pantalla.innerText =texto;
};
const btn1F = ()=>{
    texto +=btn1.innerText;
    pantalla.innerText =texto;
};
const btn2F = ()=>{
    texto +=btn2.innerText;
    pantalla.innerText =texto;
};
const btn3F = ()=>{
    texto +=btn3.innerText;
    pantalla.innerText =texto;
};
const btn4F = ()=>{
    texto +=btn4.innerText;
    pantalla.innerText =texto;
};
const btn5F = ()=>{
    texto +=btn5.innerText;
    pantalla.innerText =texto;
};
const btn6F = ()=>{
    texto +=btn6.innerText;
    pantalla.innerText =texto;
};
const btn7F = ()=>{
    texto +=btn7.innerText;
    pantalla.innerText =texto;
};
const btn8F = ()=>{
    texto +=btn8.innerText;
    pantalla.innerText =texto;
};
const btn9F = ()=>{
    texto +=btn9.innerText;
    pantalla.innerText =texto;
};
const btn0F = ()=>{
    texto +=btn0.innerText;
    pantalla.innerText =texto;
};
const btnTickF = ()=>{
    texto +=btnTick.innerText;
    pantalla.innerText =texto;
};
const btnAOF = ()=>{
    texto +=btnAO.innerText;
    pantalla.innerText =texto;
};
const btnBackF = ()=>{  
    if(texto.length>0){
        texto = texto.substring(0,texto.length-1);
        pantalla.innerText = texto;
    }
};
const btntabF = ()=>{
    texto +=btntab.innerText;
    pantalla.innerText =texto;
};
const btnqF = ()=>{
    texto +=btnq.innerText;
    pantalla.innerText =texto;
};
const btnwF = ()=>{
    texto +=btnw.innerText;
    pantalla.innerText =texto;
};
const btneF = ()=>{
    texto +=btne.innerText;
    pantalla.innerText =texto;
};
const btnrF = ()=>{
    texto +=btnr.innerText;
    pantalla.innerText =texto;
};
const btntF = ()=>{
    texto +=btnt.innerText;
    pantalla.innerText =texto;
};
const btnyF = ()=>{
    texto +=btny.innerText;
    pantalla.innerText =texto;
};
const btnuF = ()=>{
    texto +=btnu.innerText;
    pantalla.innerText =texto;
};
const btniF = ()=>{
    texto +=btni.innerText;
    pantalla.innerText =texto;
};
const btnoF = ()=>{
    texto +=btno.innerText;
    pantalla.innerText =texto;
};
const btnpF = ()=>{
    texto +=btnp.innerText;
    pantalla.innerText =texto;
};
const btnBtickF = ()=>{
    texto +=btnBtick.innerText;
    pantalla.innerText =texto;
};
const btnEnterF = ()=>{
    texto +="\n";
    pantalla.innerText =texto;
};
const btnmayusF = ()=>{
    texto +=btnmayus.innerText;
    pantalla.innerText =texto;
};
const btnaF = ()=>{
    texto +=btna.innerText;
    pantalla.innerText =texto;
};
const btnsF = ()=>{
    texto +=btns.innerText;
    pantalla.innerText =texto;
};
const btndF = ()=>{
    texto +=btnd.innerText;
    pantalla.innerText =texto;
};
const btnfF = ()=>{
    texto +=btnf.innerText;
    pantalla.innerText =texto;
};
const btngF = ()=>{
    texto +=btng.innerText;
    pantalla.innerText =texto;
};
const btnhF = ()=>{
    texto +=btnh.innerText;
    pantalla.innerText =texto;
};
const btnjF = ()=>{
    texto +=btnj.innerText;
    pantalla.innerText =texto;
};
const btnkF = ()=>{
    texto +=btnk.innerText;
    pantalla.innerText =texto;
};
const btnlF = ()=>{
    texto +=btnl.innerText;
    pantalla.innerText =texto;
};
const btnNF = ()=>{
    texto +=btnN.innerText;
    pantalla.innerText =texto;
};
const btnShiftF = ()=>{
    texto +=btnShift.innerText;
    pantalla.innerText =texto;
};
const btnMenorF = ()=>{
    texto +=btnMenor.innerText;
    pantalla.innerText =texto;
};
const btnzF = ()=>{
    texto +=btnz.innerText;
    pantalla.innerText =texto;
};
const btnxF = ()=>{
    texto +=btnx.innerText;
    pantalla.innerText =texto;
};
const btncF = ()=>{
    texto +=btnc.innerText;
    pantalla.innerText =texto;
};
const btnvF = ()=>{
    texto +=btnv.innerText;
    pantalla.innerText =texto;
};
const btnbF = ()=>{
    texto +=btnb.innerText;
    pantalla.innerText =texto;
};
const btnnF = ()=>{
    texto +=btnn.innerText;
    pantalla.innerText =texto;
};
const btnmF = ()=>{
    texto +=btnm.innerText;
    pantalla.innerText =texto;
};
const btnComaF = ()=>{
    texto +=btnComa.innerText;
    pantalla.innerText =texto;
};
const btnPuntoF = ()=>{
    texto +=btnPunto.innerText;
    pantalla.innerText =texto;
};
const btnGuionF = ()=>{
    texto +=btnGuion.innerText;
    pantalla.innerText =texto;
};
const btnSpaceF = ()=>{
    texto +=" ";
    pantalla.innerText =texto;
};


//* Eventos

btnEsc.onclick=()=>{
    btnEscF();
};
btnGrado.onclick=()=>{
    btnGradoF();
};
btn1.onclick=()=>{
    btn1F();
};
btn2.onclick=()=>{
    btn2F();
};
btn3.onclick=()=>{
    btn3F();
};
btn4.onclick=()=>{
    btn4F();
};
btn5.onclick=()=>{
    btn5F();
};
btn6.onclick=()=>{
    btn6F();
};
btn7.onclick=()=>{
    btn7F();
};
btn8.onclick=()=>{
    btn8F();
};
btn9.onclick=()=>{
    btn9F();
};
btn0.onclick=()=>{
    btn0F();
};
btnTick.onclick=()=>{
    btnTickF();
};
btnAO.onclick=()=>{
    btnAOF();
};
btnBack.onclick=()=>{
    btnBackF();
};
btntab.onclick=()=>{
    btntabF();
};
btnq.onclick=()=>{
    btnqF();
};
btnw.onclick=()=>{
    btnwF();
};
btne.onclick=()=>{
    btneF();
};
btnr.onclick=()=>{
    btnrF();
};
btnt.onclick=()=>{
    btntF();
};
btny.onclick=()=>{
    btnyF();
};
btnu.onclick=()=>{
    btnuF();
};
btni.onclick=()=>{
    btniF();
};
btno.onclick=()=>{
    btnoF();
};
btnp.onclick=()=>{
    btnpF();
};
btnBtick.onclick=()=>{
    btnBtickF();
};
btnEnter.onclick=()=>{
    btnEnterF();
};
btnmayus.onclick=()=>{
    btnmayusF();
};
btna.onclick=()=>{
    btnaF();
};
btns.onclick=()=>{
    btnsF();
};
btnd.onclick=()=>{
    btndF();
};
btnf.onclick=()=>{
    btnfF();
};
btng.onclick=()=>{
    btngF();
};
btnh.onclick=()=>{
    btnhF();
};
btnj.onclick=()=>{
    btnjF();
};
btnk.onclick=()=>{
    btnkF();
};
btnl.onclick=()=>{
    btnlF();
};
btnN.onclick=()=>{
    btnNF();
};
btnShift.onclick=()=>{
    btnShiftF();
};
btnMenor.onclick=()=>{
    btnMenorF();
};
btnz.onclick=()=>{
    btnzF();
};
btnx.onclick=()=>{
    btnxF();
};
btnc.onclick=()=>{
    btncF();
};
btnv.onclick=()=>{
    btnvF();
};
btnb.onclick=()=>{
    btnbF();
};
btnn.onclick=()=>{
    btnnF();
};
btnm.onclick=()=>{
    btnmF();
};
btnComa.onclick=()=>{
    btnComaF();
};
btnPunto.onclick=()=>{
    btnPuntoF();
};
btnGuion.onclick=()=>{
    btnGuionF();
};
btnSpace.onclick=()=>{
    btnSpaceF();
};