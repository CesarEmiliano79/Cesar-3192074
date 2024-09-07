let tareas = [];

function mostrarMenu(){
    return parseInt(prompt(`
        "Opciones disponibles"
        1.- Agregar tarea
        2.- Ver todas mis tareas
        3.- Marcar mis tareas como completadas
        4.- Salir
        `));
}

function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea: ");
    if(nombre){
        let tarea={
            nombre: nombre,
            completado: false
        };
        tareas.push(tarea);
        alert("Tarea agregada con exito");
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

function verTarea(){
    if(tareas.length === 0){
        alert("No hay ninguna tara en la lista");
    }else{
        let mensaje = "Lista de tareas: \n";
        tareas.forEach((tarea,index)=>{
            mensaje+=`${index+1}.- ${tarea.nombre} [${tarea.completado?"Completada":"Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

function marcarTareaCompletada(){
    let numero = parseInt(prompt("Introduce el numero de la tarea completada"));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero-1].completado=true;
        alert(`La tarea ${tareas[numero-1].nombre} ha sido completada`);
    }else{
        alert("Numero de tarea no valido (Fuera de rango...)");
    }
}

function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTarea();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa ...");
                continuar = false;
                break;
            default:
                alert("Opcion no valida");
        }
    }
}

console.log(iniciarPrograma());