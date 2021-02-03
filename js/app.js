
const init = () => {

    document.querySelector(".start").addEventListener("click",cronometrar)
    document.querySelector(".stop").addEventListener("click",parar)
    document.querySelector(".reiniciar").addEventListener("click",reiniciar)
    
    d = 0
    h = 0
    m = 0
    s = 0
}         

const cronometrar = ()  => {
    escribir();
    id = setInterval( escribir , 1000)
    document.querySelector(".start").removeEventListener("click",cronometrar);
}

const  escribir = () => {

    let dAux, hAux, mAux, sAux

    s++

    if (s > 59) {m++; s=0;}
    if (m > 59) {h++; m=0;}
    if (h > 23) {d++; h=0;}

    s < 10 ? sAux = "0" + s :  sAux = s
    m < 10 ? mAux = "0" + m :  mAux = m
    h < 10 ? hAux = "0" + h :  hAux = h
    d < 10 ? dAux = "0" + d :  dAux = d

    document.querySelector("#dhms").innerHTML =
    `<span class="dia">${dAux}</span><span class="horas">${hAux}</span><span class="minuto">${mAux}</span><span class="segundo">${sAux}</span>` 
}

const parar = () => {

    clearInterval(id);
    document.querySelector(".start").addEventListener("click",cronometrar)
}

const reiniciar = () => {
    clearInterval(id);
    document.querySelector("#dhms").innerHTML = 
    `<span class="dia">00</span><span class="horas">00</span><span class="minuto">00</span><span class="segundo">00</span>`

    h = 0
    m = 0
    s = 0
    d = 0

    document.querySelector(".start").addEventListener("click",cronometrar)
}

document.addEventListener("DOMContentLoaded", init)