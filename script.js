
let boton=document.getElementById("buscarBtn");
let input=document.getElementById("pokemonInput");
let divResultado=document.getElementById("resultado");
let divInicio=document.getElementById("inicio");
let divDatos=document.getElementById("datos");




let imagenes=[];
function Buscar(){
    let nombre=input.value.toLowerCase();//tomamos el valor escrito en el input cuando hace click 
    input.value=``;     
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)               //toLowerCase() hace que no se distinga entre mayuscula y minuscula
    .then (response =>{
        console.log(response);
    if (!response.ok){
        throw new Error('No encontrado,ingresa otro');
    }
    return response.json();
})
.then (data=> {
   console.log(data);
  imagenes= Object.values(data.sprites).filter(img => typeof img==="string"); /*Lo utilizo para quedarme solo con la url,evito los null*/
  divResultado.classList.remove("oculto");
   divDatos.innerHTML=`<h2>${data.name}</h2>
                            <p>Experiencia: ${data.base_experience}</p>
                            <p>ID: ${data.id}</p>
                            `;
    cargarImagenes(imagenes);
    
})
.catch(error => {
 divResultado.innerHTML = `<p style="color:red;">${error.message}</p>`;
});

};

boton.addEventListener("click", Buscar);
input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    Buscar();
  }
}); 



//CARRUSEL DE IMAGENES

const divImg=document.getElementById("carrusel-img");
const btnDer=document.getElementById("btn-der");
const btnIzq=document.getElementById("btn-izq");


let contadorPos=2;
let moverse=contadorPos*25;

btnDer.addEventListener("click",moverDer);
btnIzq.addEventListener("click",moverIzq);

divImg.style.transform = `translate(-${moverse}%)`;
divImg.style.transition = "none"; 

/*setInterval(()=>{
  moverDer()
},3000)     Lo utilizo si quiero que las imagenes se cambien solas cada 3 segundos*/ 

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



function cargarImagenes(imagenes){
    divImg.innerHTML="";    /*Limpio el contenido anterior */
    console.log("Imagenes recibidas:", imagenes);
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
