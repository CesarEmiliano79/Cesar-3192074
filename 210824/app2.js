/*
Codigo alumno Rojas Pérez César Emiliano
*/
let numeroMaquina = Math.floor(Math.random()*10-1)+1;
console.log(numeroMaquina);
let vidas = 3
let numeroUsuario = prompt("Ingrese un numero entre 1 y 10");

while(vidas != -1 ){
    if(numeroUsuario == numeroMaquina){
        alert("GANASTE!!!")
        console.log("Numero correcto");
        vidas = -1;
    } else if (numeroUsuario != numeroMaquina && vidas > 1){
        vidas --;
        numeroUsuario = prompt("Ese no es, ingresa otro numero");
        console.log("Numero incorrecto");
    } else if (numeroMaquina != numeroUsuario && vidas == 1){
        vidas --;
        numeroUsuario = prompt(`ULTIMO INTENTO
        Ingresa otro numero`);
        console.log("Numero incorrecto")
    } else {
        alert("GAME OVER");
        console.log("Fin del juego");
        vidas--;
    }
}