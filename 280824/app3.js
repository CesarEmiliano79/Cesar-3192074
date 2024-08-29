function saludar(){
    console.log("Hola como estas");
}
saludar();
//Funcion sin retorno
function saludo(nombreUsuario){
    console.log("Hola como estas ",nombreUsuario);
}
saludo("César");

console.log("---------------------------");

//Funcion con retorno
function adios(userName){
    return "Adios "+ userName;
}
console.log(adios("Ximena"));