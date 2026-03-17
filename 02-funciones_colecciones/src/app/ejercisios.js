// 1. Duplicar números con map
// ObjeƟvo: pracƟcar transformación de arreglos.
// Dado el arreglo:
// const numeros = [2, 4, 6, 8, 10];
// Crea un nuevo arreglo donde cada número esté mulƟplicado por 2.
// Salida esperada:
// [4, 8, 12, 16, 20] 

const num = [2, 4, 6, 8, 10]; // map() recorre el arreglo
const numDupli = num.map(num => num * 2);//lo multiplica por 2
console.log(numDupli); // [4, 8, 12, 16, 20]

// 2. Convertir nombres a mayúsculas con map
// ObjeƟvo: transformar cadenas de texto.
// const nombres = ["ana", "luis", "marta", "pedro"];
// Crea un nuevo arreglo con todos los nombres en mayúsculas.

const nombres = ["ana", "luis", "marta", "pedro"];
const nomMayus = nombres.map(nombre => nombre.toUpperCase()); //toUpperCase() convierte a MAYÚSCULAS map transforma cada nombre a mayúscula y devuelve un nuevo arreglo con los nombres transformados
console.log(nomMayus); // ["ANA", "LUIS", "MARTA", "PEDRO"

// 3. Obtener longitudes de palabras con map
// ObjeƟvo: usar map con strings.
// const palabras = ["sol", "computador", "mesa", "javascript"];
// Genera un arreglo con la longitud de cada palabra.
// Ejemplo esperado:
// [3, 10, 4, 10] 

const palabra = ["sol", "computador", "mesa", "javascript"]; // .length devuelve cantidad de letras
const longitudes = palabra.map(palabra => palabra.length); //map crea un nuevo arreglo con números
console.log(longitudes); // [3, 10, 4, 10]

// 4. Filtrar números pares con filter
// ObjeƟvo: seleccionar elementos según condición.
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Crea un nuevo arreglo solo con los números pares. 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(num => num % 2 === 0); //% = módulo (residuo) si es 0 → es par filter solo deja los que cumplen
console.log(pares); // [2, 4, 6, 8, 10]

// 5. Filtrar palabras largas con filter
// ObjeƟvo: filtrar textos según su tamaño.
// const palabras = ["casa", "ventana", "sol", "computadora", "luz"];
// Obtén solo las palabras que tengan más de 5 letras.

const palabras = ["casa", "ventana", "sol", "computadora", "luz"];
const palabrasLargas = palabras.filter(palabra => palabra.length > 5); //filtra palabras con más de 5 letras
console.log(palabrasLargas); // ["ventana", "computadora"]

// 6. Filtrar estudiantes aprobados con filter
// Objetivo: aplicar condiciones sobre objetos.
// const estudiantes = [
//  { nombre: "Ana", nota: 4.5 },
//  { nombre: "Luis", nota: 2.8 },
//  { nombre: "Marta", nota: 3.7 },
//  { nombre: "Carlos", nota: 2.5 }
// ];
// Obtén un nuevo arreglo con los estudiantes cuya nota sea mayor o igual a 3.0.

const estudiantes = [
  { nombre: "Ana", nota: 4.5 },
  { nombre: "Luis", nota: 2.8 },                
  { nombre: "Marta", nota: 3.7 },
  { nombre: "Carlos", nota: 2.5 }
];
const aprobados = estudiantes.filter(estudiante => estudiante.nota >= 3.0); //accede a propiedades (estudiante.nota) y filtra los que tienen nota mayor o igual a 3.0
console.log(aprobados); // [{ nombre: "Ana", nota: 4.5 }, { nombre: "Marta", nota: 3.7 }]

// 7. Sumar números con reduce
// ObjeƟvo: acumular valores.
// const numeros = [5, 10, 15, 20];
// Usa reduce para obtener la suma total del arreglo.
// Resultado esperado:
// 50 
const numers = [5, 10, 15, 20];
const sumaTotal = numers.reduce((total, num) => total + num, 0); //total acumula empieza en 0 suma cada número
console.log(sumaTotal); // 50

// 8. MulƟplicar todos los números con reduce
// ObjeƟvo: pracƟcar acumuladores.
// const numeros = [2, 3, 4];
// Usa reduce para obtener el producto total.
// Resultado esperado:
// 24 

const numeros2 = [2, 3, 4];
const productoTotal = numeros2.reduce((total, num) => total * num, 1); //empieza en 1 (importante) multiplica todos
console.log(productoTotal); // 24

// 9. Contar total de letras con reduce
// ObjeƟvo: usar reduce con strings.
// const palabras = ["hola", "mundo", "js"];
// Calcula cuántas letras hay en total sumando la longitud de cada palabra. 

const palabras2 = ["hola", "mundo", "js"];
const totalLetras = palabras2.reduce((total, palabra) => total + palabra.length, 0); //suma la longitud de cada palabra
console.log(totalLetras); // 11

// 10. Ordenar números ascendentemente con sort
// ObjeƟvo: ordenar valores numéricos.
// const numeros = [45, 12, 78, 3, 19, 1];
// Ordénalos de menor a mayor. 

const numeros3 = [45, 12, 78, 3, 19, 1];
const numerosOrdenados = numeros3.sort((a, b) => a - b); //a - b → menor a mayor
console.log(numerosOrdenados); // [1, 3, 12, 19, 45, 78]

// 11. Ordenar números descendentemente con sort
// ObjeƟvo: cambiar criterio de orden.
// Usa el mismo arreglo anterior y ordénalo de mayor a menor. 

const numerosOrdenadosDesc = numeros3.sort((a, b) => b - a); // b - a → mayor a menor
console.log(numerosOrdenadosDesc); // [78, 45, 19, 12, 3, 1]

// 12. Ordenar nombres alfabéƟcamente con sort
// ObjeƟvo: ordenar texto.
// const nombres = ["Pedro", "Ana", "Luis", "Carlos", "Marta"];
// Ordénalos alfabéƟcamente. 

const nombres2 = ["Pedro", "Ana", "Luis", "Carlos", "Marta"];
const nombresOrdenados = nombres2.sort(); //Orden alfabético automático
console.log(nombresOrdenados); // ["Ana", "Carlos", "Luis", "Marta", "Pedro"]

// 13. Ordenar productos por precio con sort
// ObjeƟvo: ordenar objetos.
// const productos = [
//  { nombre: "Teclado", precio: 120000 },
//  { nombre: "Mouse", precio: 50000 },
//  { nombre: "Monitor", precio: 800000 },
//  { nombre: "USB", precio: 30000 }
// ];
// Ordénalos del más barato al más caro. 

const productos = [
    { nombre: "Teclado", precio: 120000 },
    { nombre: "Mouse", precio: 50000 },         
    { nombre: "Monitor", precio: 800000 },
    { nombre: "USB", precio: 30000 }
];
const productosOrdenados = productos.sort((a, b) => a.precio - b.precio); //compara por propiedad precio ordena de menor a mayor
console.log(productosOrdenados); 

// [{ nombre: "USB", precio: 30000 }, { nombre: "Mouse", precio: 50000 }, { nombre: "Teclado", precio: 120000 }, { nombre: "Monitor", precio: 800000 } ]

// 14. Menú de día de la semana con switch
// ObjeƟvo: tomar decisiones con múlƟples casos.
// Solicita un número del 1 al 7 e imprime el día de la semana correspondiente:
//  1 → Lunes
//  2 → Martes
//  3 → Miércoles
//  4 → Jueves
//  5 → Viernes
//  6 → Sábado
//  7 → Domingo
// Si el número no está entre 1 y 7, mostrar: "Día no válido". 

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa un número del 1 al 7: ", (numero) => {

  numero = parseInt(numero);

  switch (numero) {
    case 1:
      console.log("Lunes"); // evalúa múltiples casos
      break; //break evita que siga ejecutando
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miércoles");
      break;
    case 4:
      console.log("Jueves");
      break;
    case 5:
      console.log("Viernes");
      break;
    case 6:
      console.log("Sábado");
      break;
    case 7:
      console.log("Domingo");
      break;
    default: //default es el "else"
      console.log("Día no válido");
  }

  rl.close();
});

// 15. Clasificación de color con switch
// ObjeƟvo: usar switch con texto.
// Solicita un color y muestra un mensaje:
//  "rojo" → "Color de alerta"
//  "verde" → "Color de avance"
//  "amarillo" → "Color de precaución"
//  cualquier otro → "Color no reconocido" 

const readline2 = require("readline");

const rl2 = readline2.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl2.question("Ingresa un color: ", (color) => {//color es el valor ingresado por el usuario
  switch (color) { // evalúa el valor de color
    case "rojo":
      console.log("Color de alerta");
      break;
    case "verde":
      console.log("Color de avance");
      break;
    case "amarillo":
      console.log("Color de precaución");
      break;// si no es ninguno de los casos anteriores
    default:
      console.log("Color no reconocido"); // si no es ninguno de los casos anteriores
  }
  rl2.close();
});

// 16. Tabla del 5 con while
// ObjeƟvo: repeƟr instrucciones con contador.
// Usa un ciclo while para imprimir la tabla del 5 desde:
// 5 x 1 = 5
// hasta:
// 5 x 10 = 50 

let i = 1;
while (i <= 10) { // repite mientras se cumpla la condición i++ incrementa
  console.log("5 x " + i + " = " + (5 * i));
  i++;
} 


// 17. Contar del 10 al 1 con while
// ObjeƟvo: pracƟcar decremento.
// Usa while para mostrar una cuenta regresiva desde 10 hasta 1.
// Al final imprime:
// "¡Despegue!"

let j = 10;
while (j >= 1) { // repite mientras j sea mayor o igual a 1
  console.log(j);// muestra el valor actual de j
  j--;// decrementa j en 1 en cada iteración
}
console.log("¡Despegue!");

// 18. Sumar números hasta llegar a 100 con while
// ObjeƟvo: repeƟr hasta cumplir condición.
// Crea un programa que vaya sumando números consecuƟvos comenzando en 1 hasta que la suma
// sea mayor o igual a 100.
// Debes mostrar:
//  cada número sumado
//  la suma final
//  cuántos números fueron necesarios 

let suma = 0;// variable para acumular la suma de los números
let numero = 1;// número que se va a sumar, comienza en 1 y se incrementa en cada iteración
let contador = 0; // contador para llevar la cuenta de cuántos números se han sumado
while (suma < 100) {   // mientras la suma sea menor a 100, sigue sumando números consecutivos
  suma += numero; // suma el número actual a la variable suma
  console.log(`Número sumado: ${numero}, Suma actual: ${suma}`);// muestra el número que se sumó y la suma actual después de agregar ese número
  numero++;// incrementa el número para la próxima iteración
  contador++; // incrementa el contador para contar cuántos números se han sumado
}
console.log(`Suma final: ${suma}, Números necesarios: ${contador}`);

// 19. Ejercicio combinado: filter + map
// ObjeƟvo: encadenar métodos.
// const numeros = [3, 8, 15, 20, 7, 12, 1, 30];
// 1. Filtra solo los números mayores que 10.
// 2. Luego mulƟplícalos por 2.
// Resultado esperado:
// [30, 40, 24, 60]

const numeros4 = [3, 8, 15, 20, 7, 12, 1, 30];
const resultado = numeros4 
  .filter(num => num > 10) //filtra números mayores a 10
  .map(num => num * 2);//multiplica por 2 los números filtrados
console.log(resultado); // [30, 40, 24, 60]   

// 20. Ejercicio integrador: filter + sort + map + reduce
// ObjeƟvo: integrar varios métodos en un solo problema.
// const ventas = [
//  { producto: "Mouse", canƟdad: 3, precio: 50000 },
//  { producto: "Teclado", canƟdad: 2, precio: 120000 },
//  { producto: "Monitor", canƟdad: 1, precio: 800000 },
//  { producto: "USB", canƟdad: 5, precio: 30000 }
// ];
// Realiza lo siguiente:
// 1. Filtra los productos cuya canƟdad sea mayor o igual a 2.
// 2. Ordénalos de mayor a menor según el precio.
// 3. Crea un nuevo arreglo con frases como:
// "Teclado - Total: 240000"
// 4. Calcula con reduce el valor total de todas las ventas. 

const ventas = [
  { producto: "Mouse", cantidad: 3, precio: 50000 },
  { producto: "Teclado", cantidad: 2, precio: 120000 },
  { producto: "Monitor", cantidad: 1, precio: 800000 },
  { producto: "USB", cantidad: 5, precio: 30000 }
];
const resultadoVentas = ventas
  .filter(venta => venta.cantidad >= 2) //filtra productos con cantidad mayor o igual a 2
  .sort((a, b) => b.precio - a.precio) //ordena de mayor a menor por precio
  .map(venta => `${venta.producto} - Total: ${venta.cantidad * venta.precio}`); //crea un nuevo arreglo con frases que indican el producto y el total de la venta (cantidad * precio)
const totalVentas = ventas.reduce((total, venta) => total + (venta.cantidad * venta.precio), 0); //calcula el valor total de todas las ventas sumando el total de cada venta (cantidad * precio) a un acumulador que comienza en 0
console.log(resultadoVentas); // ["Teclado - Total: 240000", "Mouse - Total: 150000", "USB - Total: 150000"]
console.log(`Valor total de ventas: ${totalVentas}`); // Valor total de ventas: 1190000
