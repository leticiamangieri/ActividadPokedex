const divImg=document.getElementById("carrusel-img");
const btnDer=document.getElementById("btn-der");
const btnIzq=document.getElementById("btn-izq");

btnDer.addEventListener("click",moverDer);
btnIzq.addEventListener("click",moverIzq);


console.log("misDatosFetch completo:", window.misDatosFetch);
console.log("sprites:", window.misDatosFetch.sprites);
const imagenes= Object.values(window.misDatosFetch.sprites).filter(img => typeof img==="string");
console.log(imagenes);

let moverse=0;
    contadorPos=0;
  /*++cantImg= 100/ */  
function moverDer(){  
   /* if contadorPos >= 
    contadorPos++;  */       /*El 12.5 sale de 100%/8, que 8 es la cantidad de imagenes*/
    moverse=moverse + 12.5; /*Si no agrego esto no se mueve al apretar nuevamente el btn,porque ya esta en la posición indicada*/
    divImg.style.transform=`translate(-${moverse}%)`;  /*Mueve el div que tiene las imagenes sobre el eje x*/
    divImg.style.transition="all ease .6s";
}

function moverIzq(){
    moverse=moverse - 12.5; 
    divImg.style.transform=`translate(-${moverse}%)`
    divImg.style.transition="all ease .6s";
}


//const imagenes= Object.values(window.misDatosFetch.sprites).filter(img => typeof img==="string");
//console.log(imagenes);

function cargarImagenes(imagenes){
    divImg.innerHTML="";    /*Limpio el contenido anterior */
    imagenes.forEach(src => {       /*Recorro el arreglo (imagenes) que tiene los src, el cual cree en script.js */
        if(src){                    /*src lo elijo como clave,podria ser cualquier cosa */
            const img=document.createElement("img");
            img.src=src;   /*Le asigno a el atributo src de img el src obtenido del fetch, los cuales puse en el arreglo */
            img.alt="imagen pokémon";
            img.classList.add("imagen-carrusel");      /*Agrego clase para luego poder darle estilo*/
            divImg.appendChild(img);
        }
                 
    });
}
