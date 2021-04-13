// //PIEDRA = 1
// //PAPEL = 2
// //TIJERA = 3

var resultado = $('.info-container');
resultado.hide();

$(document).ready(function () {

    var name = prompt("Cual es tu nombre?");  //Agrega el nombre
    $('#nombre-us').html(name);

    $('.start-button').click(function() {  

        //$('.start-button').html('Reiniciar');
        $('.start-button').remove();

        var variable;
        var usuario;
        var scoreUser = 0;
        var scorePc = 0;

        $('.user-score').html(scoreUser);
        $('.cpu-score').html(scorePc);
        $('.seleccion-us').attr('src', './img/interrogacion.svg');
        $('.seleccion-pc').attr('src', './img/interrogacion.svg');
        


        $('.button-piedra').click(function(){
            usuario = 1;
            console.log('seleccion usuario: ' + usuario);
            variable = Math.floor(Math.random()*(3-1+1)+1);
            variable = parseInt(variable);
            console.log("El valor de la computadora fue: " + variable);
            game(usuario, variable);
        });
        $('.button-papel').click(function(){
            usuario = 2;
            console.log('seleccion usuario: ' + usuario);
            variable = Math.floor(Math.random()*(3-1+1)+1);
            variable = parseInt(variable);
            console.log("El valor de la computadora fue: " + variable);
            game(usuario, variable);
        });
        $('.button-tijeras').click(function(){
            usuario = 3;
            console.log('seleccion usuario: ' + usuario);
            variable = Math.floor(Math.random()*(3-1+1)+1);
            variable = parseInt(variable);
            console.log("El valor de la computadora fue: " + variable);
            game(usuario, variable);
        });

        function animation(){

            resultado.show(3000);
            resultado.hide(100);
        }

        function game(usuario, variable){

            if (usuario == variable) {
                $('.result').html('Empate');
                animation();
            } else if (usuario == 1 && variable != 2 ) {
                scoreUser+=1;
                $('.user-score').html(scoreUser);
                console.log('puntaje usuario: ' + scoreUser);
                $('.result').html('Ganaste!');
                animation();
            } else if (usuario == 2 && variable != 3 ) {
                scoreUser+=1;
                $('.user-score').html(scoreUser);
                console.log('puntaje usuario: ' + scoreUser);
                $('.result').html('Ganaste!');
                animation();
            } else if (usuario == 3 && variable != 1 ) {
                scoreUser+=1;
                $('.user-score').html(scoreUser);
                console.log('puntaje usuario: ' + scoreUser);
                $('.result').html('Ganaste!');
                animation();
            } else 
            {
                scorePc+=1;
                $('.cpu-score').html(scorePc);
                console.log('puntaje cp: ' + scorePc);
                $('.result').html('Perdiste');
                animation();
            }

            switch (true) {
                case (usuario == 1):
                    $('.seleccion-us').attr('src', './img/rock.png');
                break;
                case (usuario == 2):
                    $('.seleccion-us').attr('src', './img/paper.png');
                break;
                case (usuario == 3):
                    $('.seleccion-us').attr('src', './img/scissors.png');
                break;
                default:
                    $('.seleccion-us').attr('src', './img/interrogacion.svg');
                break;
            }
            switch (true) {
                case (variable == 1):
                    $('.seleccion-pc').attr('src', './img/rock.png');
                break;
                case (variable == 2):
                    $('.seleccion-pc').attr('src', './img/paper.png');
                break;
                case (variable == 3):
                    $('.seleccion-pc').attr('src', './img/scissors.png');
                break;
                default:
                    $('.seleccion-pc').attr('src', './img/interrogacion.svg');
                break;
            }

        }
        
    });
});


