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

        });
        {

        };
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