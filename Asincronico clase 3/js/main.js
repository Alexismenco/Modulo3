var chiste = document.querySelector('.punteado');
var btnActualizar = document.querySelector('#actualizar');
var chisteText = document.createElement('p');

function obtenerChiste(){
    fetch(`https://api.chucknorris.io/jokes/random`)
    .then(res => res.json())
    .then(data => {
        insertarChiste(data);
        console.log(data);
    })
}
obtenerChiste();

function insertarChiste(data){
    chisteText.innerText = data;
    chiste.appendChild(chisteText);
}

btnActualizar.addEventListener("click", () => {
    limpiarHtml();
    obtenerChiste();
})

function limpiarHtml(){
    console.log(chisteText.removeChild)
}
    

