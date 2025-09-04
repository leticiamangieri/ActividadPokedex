/*
====================================
🚀 Guía para completar el fetch
====================================

1. Usar fetch con la URL de la API y el nombre/número del Pokémon.
    Ejemplo: https://pokeapi.co/api/v2/pokemon/{nombre}

2. Convertir la respuesta a JSON para poder trabajarla en JS.

3. Revisar en la consola qué datos trae el objeto (console.log).

4. Extraer la información que necesiten (nombre, imagen, tipo, etc.).

5. Mostrar esa información en el DOM (innerHTML).
    👉 Consejo: empiecen por mostrar el nombre,
    después agreguen la imagen y otros datos.

6. Manejar errores por si el Pokémon no existe o hay problemas de conexión.
*/
let boton=document.getElementById("buscarBtn");
let div=document.getElementById("resultado");

boton.addEventListener("click", function(){
    let nombre=document.getElementById("pokemonInput").value.toLowerCase(); //tomamos el valor escrito en el input cuando hace click 
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)               //toLowerCase() hace que no se distinga entre mayuscula y minuscula
    .then (response =>{
        console.log(response);
    if (!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then (data=> {
   console.log(data);
    div.innerHTML=`<h1>${data.name}</h1>
                    <p> </p>`
})
.catch(error => console.error('Error:',error))

})






