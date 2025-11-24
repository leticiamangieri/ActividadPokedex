
  
document.addEventListener("DOMContentLoaded", () => {
let contenedorFav=document.getElementById("contenedor-fav");

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
console.log(favoritos);
  if (favoritos.length === 0) {
    contenedorFav.innerHTML = `<p>Aún no hay favoritos</p>`;
  } else {
    favoritos.forEach(nombre => {
        let habilidades = (nombre.abilities || []).map(a => a.ability.name).join(', '); //Recorre el arreglo y se queda solo con el nombre de la habilidad,
        let tipo = nombre.types.map(a => a.type.name).join(', ');               //.join une todas las respuestas en una cadena de texto separada por comas
                                                                        //y se guarda en una variable.}
    let div = document.createElement("div");
    div.className="resultado col-12 col-md-6 col-lg-4 mb-3 tarjetaFav";
    div.innerHTML = `<button class="quitarFav" data-name="${nombre.name}"><i class="bi bi-x"></i></button>
                      <h5>${nombre.name}</h5>     
                      <p>ID: ${nombre.id}</p>
                      <p>Experiencia: ${nombre.base_experience}</p>
                      <p>Habilidades: ${habilidades}</p>
                      <p>Tipo: ${tipo}</p>
                      `
                      ;
contenedorFav.appendChild(div);

    });
  }
});

let btnQuitarFav=document.getElementsByClassName("quitarFav");
contenedorFav.addEventListener("click", function (e) {
  const boton = e.target.closest(".quitarFav");
  if (boton) {
    const nombre = boton.getAttribute("data-name");

    // Elimina los datos del localStorage
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos = favoritos.filter(item => item.name !== nombre); // busca el pokemon en los favoritos
    localStorage.setItem("favoritos", JSON.stringify(favoritos)); //actualizo la lista de favoritos

    // Elimina la tarjeta que contiene el pokemon que quiero quitar de favoritos
    const tarjeta = e.target.closest("div");
    if (tarjeta) tarjeta.remove();

    if (favoritos.length===0){
    contenedorFav.innerHTML=`<p>Aún no hay favoritos</p>`
  }
  }})
;
