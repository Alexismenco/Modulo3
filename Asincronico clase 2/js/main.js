var semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
var diaHoy = new Date().getDay();

function diaSemana(){
    for (i=0; i< semana.length; i++){
        if (i == diaHoy){
            alert("Hoy es "+ semana[i])
        }
    }
}

diaSemana();




