var chiste = document.querySelector('.punteado');
var btnActualizar = document.querySelector('#actualizar');
var chisteText = document.createElement('p');

function obtenerChiste(){
    $.getJSON("https://api.chucknorris.io/jokes/random", function(data){
    insertarChiste(data)
    });
};
obtenerChiste();

function insertarChiste(data){
    chisteText.innerText = data.value;
    chiste.appendChild(chisteText);
};

btnActualizar.addEventListener("click", () => {
    limpiarHtml();
    obtenerChiste();
});

function limpiarHtml(){
    chisteText.removeChild;
};
    

