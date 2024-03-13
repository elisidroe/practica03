let tienda = "Amazon";
let saludo = "Tienda en linea es: " + tienda + "!";
// Mostrar en consola
console.log(saludo);




// Ejemplo de variable numérica 
let edad = 23;
let edadElAñoSiguiente = edad + 1;
// Mostrar en consola 
console.log("Edad actual:", edad);
console.log("Edad el próximo año:", edadElAñoSiguiente);



// Ejemplo de variable booleana 
let esMayorDeEdad = true;
let puedeVotar = false;
// Mostrar en consola 
console.log("¿Es mayor de edad?", esMayorDeEdad);
console.log("¿Puede votar?", puedeVotar);

// Ejemplo de variables booleanas 
let esDiaLaboral = true;
let tieneVacaciones = false;
// Mostrar en consola 
console.log("¿Hoy es día laboral?", esDiaLaboral);
if (esDiaLaboral && !tieneVacaciones) {
    console.log("Es un día de trabajo normal.");
}
else if
    (!esDiaLaboral && tieneVacaciones) {
    console.log("¡Estás de vacaciones!");
}
else {
    console.log("Estás de alguna forma en una situación especial.");
}

// Definir la edad límite para ser considerado mayor de edad
const edadLimite = 18;

// Función para verificar si un alumno es mayor de edad
function verificarEdad(alumnoNombre, alumnoEdad) {
    if (alumnoEdad >= edadLimite) {
        console.log(`${alumnoNombre} es mayor de edad.`);
    } else {
        console.log(`${alumnoNombre} no es mayor de edad.`);
    }
}

// Ejemplo de uso
verificarEdad("Juan", 18);
verificarEdad("María", 17);


// Declarar un array de nombres 
let nombres = ["Ana", "Carlos", "Elena","Lizeth","Tania","Sasha"]; 
// Acceder y mostrar elementos del array 
console.log("Primer nombre:", nombres[0]); 
console.log("Número de nombres en el array:", nombres.length);
// Añadir un nuevo nombre al array 
nombres.push("Daniel"); 
// Mostrar el array actualizado 
console.log("Nombres actualizados:", nombres);

// 1beisbol 2 soccer 3 americano 4basket 5 taekwondo agregar box

// Lista de deportes 
let deportes = ["Baseball", "Soccer", "Americano","Basketball","Taekwondo",]; 
// Acceder y mostrar elementos del array 
console.log("Primer Deporte:", deportes[0]); 
console.log("Número de Deportes en el array:", deportes.length);
// Añadir un nuevo nombre al array 
deportes.push("Box"); 
// Mostrar el array actualizado 
console.log("Deportes actualizados:", deportes);

// Declarar un objeto representando a una persona 
let persona = { nombre: "María", edad: 30, ciudad: "Madrid" }; 
// Acceder y mostrar propiedades del objeto 
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad); 
console.log("Ciudad:", persona.ciudad);

//Calculadora de Promedio Instrucciones: Declarar tres variables llamadas nota1, nota2 y nota3, y asignarles valores numéricos que representen las calificaciones de un estudiante en tres asignaturas diferentes. Calcular el promedio de estas tres calificaciones. Mostrar el resultado del promedio en la consola. Código a Formular por el Estudiante:

let nota1 = 6;
let nota2 = 8;
let nota3 = 6;

let promedio = ((nota1 + nota2 + nota3)/3)
console.log("El promedio de los alumnos es", promedio);


var lado1 = 98;
var lado2 = 306;

var forc = (lado1 * lado2);
console.log(forc);

var base1 = 497;
var altura2 = 58;
var fort = (base1 * altura2) / 2;
console.log("El area del triangulo es", fort);

