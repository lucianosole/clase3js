// Ciclos/Bucles/Iteraciones
//¿Qué es un ciclo y para qué sirve?
//Los ciclos por ende son una herramienta que nos permiten repetir un bloque de código o instrucciones cierta caantidad de veces y de manera CONTROLADA.

//Tipos de ciclos: 
//1) Ciclo por conteo: va a ir sumando una unidad por cada vuelta y cuando llegue al toque que le hayamos indicados deja de iterar (ej: For)

//2) Ciclos condicionales: va a iterar siempre y cuando se cumpla una condición (while y do while)

//For: 

//Lo voy a usar cuando se de la cantidad de repeticiones que debe tener mi código. 
//Sintaxis:
//for (desde ,  hasta , actualización)
//desde: es el primer valor que me va a pedir el código y va a ser un valor inicial.
//hasta: va a ser el valor hasta donde va a iterar mi código. 
//actualización: en cada vuelta del bucle este contador nos va a dar el valor que debe cambiar en cada vuelta. Por lo general suma de a uno. 

//Ejemplo A: Quiero mostrar "Hola Brasil" por consola.

// for (let i = 0; i<10; i = i+2){
//     console.log ("Hola Mundo");
// }

//Ejemplo B: si quiero que comience a contar desde 1 e incluya al 10

// for(let i = 0; i <=10; i = i+1){
//     console.log(i); 
// }

//Ejemplo C: si quiero mostrar por consola los números pares entre 0 y 10.
// for (let i = 0; i <= 10; i= i+2){
//     console.log(i)
// }

//Ejemplo D: pido una contraseña al usuario hasta que la inrese correctamente. 

// let passwordUsuario = parseInt(prompt("Por favor ingrese su contraseña : "));
// const passAutorizado = 1234; 

// for (let i=0; i<2 ; i++){
//     if (passwordUsuario == passAutorizado){
//         console.log("cotraseña correcta");
//         break //para hacer el corte
//     } else {
//         passwordUsuario=parseInt(prompt("contraseña incorrecta, ingrese de nuevo"));
//     }
    
// };

//Ejemplo E: continue. cuando bajo cierta condición el ciclo saltea una repetición y sigue con la próxima. 
//Mostrar los números del 0 al 6 salteando los números pares.
// este símbolo % es para una operación de módulo, es decir retorna el resto de una división. Si el resto es cero, el número es par. De lo contrario es Impar. No confundirlo con el simbolo / que es para hacer una división en una operación. 

// for (let i=0; i<=6; i++){
//     if(i % 2 == 0){
//         continue
//     }
//     console.log(i)
// }

//Ciclo while
// es un ciclo que se ejecuta mientras la condición evaluada ser verdadera. 

//Ejemplo G:

let nombre = prompt ("Ingrese su nombre:(para salir ingrese la palabra cancelar)");
while (nombre != "cancelar"){
    console.log(nombre);
    nombre= prompt ("Ingrese su nombre:(para salir ingrese la palabra cancelar)");
}

// do while.. la diferencia del ciclo do while y while es que es ciclo do while se ejecuta al menos una vez. 

// const passAutorizado2 = 1234;
// let passUser; 
// do {
//     passUser= prompt("Ingrese su password: ");
// } while (passUser!=passAutorizado2);

//Switch: no es un ciclo, no es un bucle. Es mas una estructura de selección. Pueden llegan a encontrarlo como un condicional. Está diseñado para múltiples condciones sobre la misma variable y después de la condición de la variable vamos a ejecutar cierta instrucción de código. 

let clima = prompt ("Ingrese el clima de su ciudad : ")

switch (clima){
    case "lluvia":
        console.log("Dormí toda la tarde/noche");
        break;
    
    case "nublado":
        console.log ("Lindo día para hacer un asado");
        break;

    case "frio":
        console.log("No te olvides de abrigarte");
        break;
        default:
            console.log("existen más climas, por si las dudas");
            break;
}


