let opciones = prompt(`Elija una opción:
	1.- Libros
	2.- Peliculas
	3.- Juegos
	`);
switch (opciones){
case "1":
	console.log("El principito");
case "2":
	console.log("El padrino");
case "3":
	console.log("GTA V");
break;
default:
	console.log("Opción no valida");
}