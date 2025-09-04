
let boton=document.getElementById("buscarBtn");
let input=document.getElementById("pokemonInput");
let div=document.getElementById("resultado");

function Buscar(){
    let nombre=input.value.toLowerCase(); //tomamos el valor escrito en el input cuando hace click 
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
  //  div.innerHTML=`<h1>${data.name}</h1>
                   // <p></p>`
})
.catch(error => {
 resultado.innerHTML = `<p style="color:red;">${error.message}</p>`;
});

};

boton.addEventListener("click", Buscar);
input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    Buscar();
  }
});