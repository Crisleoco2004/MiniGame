var variable; 
variable = Math.floor(Math.random()*(3-1+1)+1);
variable = parseInt(variable);
console.log("El valor de la computadora fue " + variable);


//PIEDRA = 1
//PAPEL = 2
//TIJERA = 3

function inicio(user) {
    if (user == variable) {
        console.log("Empate");
    } else if (user == 1 && variable != 2 ) {
        console.log("Ganaste");
    } else if (user == 2 && variable != 3 ) {
        console.log("Ganaste");
    } else if (user == 3 && variable != 1 ) {
        console.log("Ganaste");
    } else 
    {
        console.log("perdiste")
    }
}



