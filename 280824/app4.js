function sumar(n1,n2){
    x = n1+n2;
    return "La suma de "+n1+" mas "+n2+" es igual a "+x;
}
let n1 =parseInt(prompt("Dame un numero"));
let n2 =parseInt(prompt("Dame otro numero"));
console.log(sumar(n1,n2));