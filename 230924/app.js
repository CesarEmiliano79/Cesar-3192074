//Ejercicio 1: Hacer una linea vertical y horizontal con 
//una estructura de control
let y=1;
let x1="+\n";
while(y!=4){
    x1=x1+"+\n";
    y++;
}
console.log("Linea vertical");
console.log(x1);
//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
let z=1;
let x2="+";
while(z!=4){
    x2=x2+"+";
    z++;
}
console.log("Linea horizontal");
console.log(x2);

//Ejercicio 2: Convertir en funciones las anteriores lineas para que el usuario
//defina de cuanto es la longitud de las lineas

function ver(num){
    let y=1;
    let x1="+\n";
    while(y!=num){
        x1=x1+"+\n";
        y++;
    }
    console.log("Linea vertical");
    return x1;
}

function hor(num){
    let z=1;
    let x2="+";
    while(z!=num){
        x2=x2+"+";
        z++;
    }
    console.log("Linea horizontal");
    return x2;
}

let num1=parseInt(prompt("Ingrese el numero de la longitud de la linea vertical:"));
let num2=parseInt(prompt("Ingrese el numero de la longitud de la linea horizontal:"));
console.log(ver(num1));
console.log(hor(num2));

//Ejercicio 3: Mostrar las tablas de multiplicar del 1 al 10

for(i=1;i<=10;i++){
    tabla="Tabla del "+i+"\n";
    for(j=1;j<=10;j++){
        x=i*j;
        tabla=tabla+(i+"*"+j+"="+x+"\n");
    }
    console.log(tabla);
}

//Ejercicio 4: Mostrar con un for each una lista de 10 frutas con su indice

let frutas=["Manzana","Pera","Uva","Platano","Higo","Sandia","Melon","Papaya","Naranja","Guayaba"];
let mensaje="Lista de frutas:\n";
frutas.forEach((fruta,index) => {
    mensaje+=`${index+1}.- ${frutas[index]}\n`;
});
console.log(mensaje);