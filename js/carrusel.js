const divImg=document.getElementById("carrusel-img");
const btnDer=document.getElementById("btn-der");
const btnIzq=document.getElementById("btn-izq");


let contadorPos=2; //Para que empiece con la foto de frente,en este caso esta en la pos=2,tercera foto
let moverse=contadorPos*25;

btnDer.addEventListener("click",moverDer);
btnIzq.addEventListener("click",moverIzq);

divImg.style.transform = `translate(-${moverse}%)`; //Se mueve para mostrar la tercer imagen
divImg.style.transition = "none";                    //Sin transición para que no se note el cambio al iniciar

function moverDer(){  
    if (contadorPos >= 3){
      moverse=0;
      contadorPos=0;
      divImg.style.transform=`translate(-${moverse}%)`;
      divImg.style.transition="none";
    }else{
      contadorPos++;        /*El 25 sale de 100%/8, que  es la cantidad de imagenes*/
    moverse=moverse + 25; /*Si no agrego esto no se mueve al apretar nuevamente el btn,porque ya esta en la posición indicada*/
    divImg.style.transform=`translate(-${moverse}%)`;  /*Mueve el div que tiene las imagenes sobre el eje x*/
    divImg.style.transition="all ease .6s";
    }
  }
    

function moverIzq(){
    contadorPos--;
    if (contadorPos<0){
     contadorPos=3;
     moverse=75;
    divImg.style.transform=`translate(-${moverse}%)`;
    divImg.style.transition="none";
    }else{
    moverse=moverse - 25; /*Si no agrego esto no se mueve al apretar nuevamente el btn,porque ya esta en la posición indicada*/
    divImg.style.transform=`translate(-${moverse}%)`;  /*Mueve el div que tiene las imagenes sobre el eje x*/
    divImg.style.transition="all ease .6s";
    }  
}



window.cargarImagenes=function cargarImagenes(imagenes){
    divImg.innerHTML="";    /*Limpio el contenido anterior */

    imagenes.forEach(src => {       /*Recorro el arreglo (imagenes) que tiene los src, el cual cree en script.js */
        if(src){                    /*src lo elijo como clave,podria ser cualquier cosa */
            let img=document.createElement("img");
            img.src=src;   /*Le asigno a el atributo src de img el src obtenido del fetch, los cuales puse en el arreglo */
            img.alt="imagen pokémon";
            img.classList.add("imagen-carrusel");      /*Agrego clase para luego poder darle estilo*/
            divImg.appendChild(img);
        }
                 
    });
}
