
let boton=document.getElementById("buscarBtn");
let input=document.getElementById("pokemonInput");
let divResultado=document.getElementById("resultado");
let divInicio=document.getElementById("inicio");
let divDatos=document.getElementById("datos");
let btnVolver=document.getElementById("btnVolver")
const divInicioPrevError=divInicio.innerHTML; //Lo agrego para restaurar los elementos de busqueda luego de mostrar el error,linea 45


window.imagenes=[];
function Buscar(){
  console.log('Buscar fue ejecutada');
  window.imagenes=[];
    let nombre=input.value.toLowerCase();//tomamos el valor escrito en el input cuando hace click 
    input.value=``;     
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)               //toLowerCase() hace que no se distinga entre mayuscula y minuscula
    .then (response =>{
        console.log(response);
    if (!response.ok){
        throw new Error('Pokemon no encontrado,ingresa otro');
    }
    return response.json();
})
.then (data=> {
  console.log(data);
  window.misDatosFetch=data;
  window.imagenes= Object.values(data.sprites).filter(img => typeof img==="string"); /*Lo utilizo para quedarme solo con la url,evito los null*/
  divResultado.classList.remove("oculto");
  btnVolver.classList.remove("oculto")
  divInicio.classList.add("ocultoResponsive"); //para ocultar cuando cambia a celular.
  let habilidades = data.abilities.map(a => a.ability.name).join(', '); //Recorre el arreglo y se queda solo con el nombre de la habilidad,
  let tipo = data.types.map(a => a.type.name).join(', ');               //.join une todas las respuestas en una cadena de texto separada por comas
                                                                        //y se guarda en una variable.
   divDatos.innerHTML=`<h2>${data.name}</h2>     
                            <p>ID: ${data.id}</p>
                            <p>Experiencia: ${data.base_experience}</p>
                            <p>Habilidades: ${habilidades}</p>
                            <p>Tipo: ${tipo}</p>

                            `;
    window.cargarImagenes(window.imagenes);    
   
})
.catch(error => {
// divInicio.innerHTML = `<p style="color:red; font-family: 'Press Start 2P', sans-serif; font-size:12px">${error.message}</p>`;
alert(error.message);
});
//setTimeout(() => {
  //  divInicio.innerHTML= divInicioPrevError;   //Aparece nuevamente el buscador despues de mostrar el error
 // }, 2000);

};

boton.addEventListener("click", Buscar);
input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    Buscar();
  }
}); 


//Botón de volver al buscador

btnVolver.addEventListener("click",function(){
  divResultado.classList.add("oculto");
  btnVolver.classList.add("oculto");
  divInicio.classList.remove("ocultoResponsive");
})


