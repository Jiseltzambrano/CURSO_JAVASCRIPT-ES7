// formas de declarar funciones en javascript

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3)); // Imprime 8

const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(5, 3)); // Imprime 15

const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max); // clamp a un rango entre min y max
};
console.log(clamp(10, 0, 5)); // Imprime 5 (clamp a 5)

// Parametros por defecto, rest y guard clauses

function greet(name = "Invitado") {
  if (!name.trim())
    // trim elimina espacios en blanco al inicio y al final de la cadena
    return "Hola, Invitado!";
  return `Hola, ${name}!`;
}

console.log(greet()); // Imprime "Hola, Invitado!"
console.log(greet("Alice"));

// Arrays y metodos claves

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((num) => num * 2); // map crea un nuevo array con los resultados de la función aplicada a cada elemento
console.log(cuadrados); // Imprime [1, 4, 9, 16, 25]

const expenses = [
  { amount: 50, category: "food" },
  { amount: 20, category: "transport" },
  { amount: 30, category: "food" },
];
// filter 

const foodExpenses = expenses.filter((expense) => expense.category === "food"); 
// filter crea un nuevo array con los elementos que cumplen la condición
console.log(foodExpenses); // Imprime [{ amount: 50, category: "food" }, { amount: 30, category: "food" }]

const totalFoodExpense = foodExpenses.reduce((total, expense) => total + expense.amount, 0);
// reduce acumula un valor a través de los elementos del array, en este caso sumando los montos de los gastos de comida
console.log(totalFoodExpense); // Imprime 80

// map filter reduce son métodos muy poderosos para trabajar con arrays de manera funcional y evitar mutaciones.
// ejemplo de map y filter juntos
const numbers = [1, 2, 3, 4, 5];
const evenSquares = numbers
  .filter((num) => num % 2 === 0) // Filtra los números pares
  .map((num) => num * num); // Luego mapea esos números al cuadrado
console.log(evenSquares); // Imprime [4, 16]

// hacer 5 ejemlos de map 5 ejemplos de filter 5 ejemplos de reduce5 ejemlos de map 5 ejemplos de filter 5 ejemplos de reduce
// ejemplos con map
// multiplicar numeros por 2 usando map
const num = [1, 2, 3, 4];
const result = num.map(num => num * 2);

console.log(result); // [2, 4, 6, 8]

//sumar n1 a cada número
const nume = [5, 10, 15];
const resultado = nume.map(num => num + 1);

console.log(resultado); // [6, 11, 16]

// convertir nombres a mayusculas con map
const nombres = ["ana", "juan", "pedro"];
const resul = nombres.map(nombre => nombre.toUpperCase());

console.log(resul); // ["ANA", "JUAN", "PEDRO"]

// sacar el cuadrado de cada numero con map
const numros = [2, 3, 4];
const resultdo = numros.map(num => num * num);

console.log(resultdo); // [4, 9, 16]
 // agragar texto a cada nombre con map
 const nomb = ["Luis", "Marta", "Sofía"];
const resutado = nomb.map(nomb=> "Hola " + nomb);

console.log(resutado); // ["Hola Luis", "Hola Marta", "Hola Sofía"]

//ejemplos con filter
// solo numeros mayores a 10
const nums = [5, 12, 3, 20, 11];
const mayores10 = nums.filter(n => n > 10);
console.log(mayores10); // [12, 20, 11]

// personas mayores a 18 
const personas = [{edad: 17}, {edad: 18}, {edad: 25}];
const adultos = personas.filter(p => p.edad >= 18);
console.log(adultos); // [{edad:18},{edad:25}]

//buscar por categoria
const gastos = [
  { amount: 50, category: "comida" },
  { amount: 20, category: "transporte" },
  { amount: 30, category: "comida" }
];
const comida = gastos.filter(g => g.category === "comida");
console.log(comida);

// frutas que tengan con ar 
const frutas = ["pera", "manzana", "mora", "naranja"];
const conAr = frutas.filter(f => f.includes("ra"));
console.log(conAr); // ["naranja"]

//solo positivos
const numes = [-3, 0, 7, -1, 2];
const positivos = numes.filter(n => n > 0);
console.log(positivos); // [7, 2]

//ejemplos con reduce
//sumar todos los numeros 
const numos = [1, 2, 3, 4];
const suma = numos.reduce((acc, n) => acc + n, 0);
console.log(suma); // 10

//Multiplicar todos los números
const numeos = [2, 3, 4];
const producto = numeos.reduce((acc, n) => acc * n, 1);
console.log(producto); // 24

//encontrar al mayor 
const nuems = [5, 12, 3, 20];
const mayor = nuems.reduce((acc, n) => (n > acc ? n : acc), nuems[0]);
console.log(mayor); // 20

// unir en una frase
const palabras = ["Hola", "cómo", "vas"];
const frase = palabras.reduce((acc, p) => acc + " " + p);
console.log(frase); // "Hola cómo vas"

//sumar solo los números pares
const nuemsr = [1, 2, 3, 4, 5, 6];
const sumaPares = nuemsr.reduce((acc, n) => (n % 2 === 0 ? acc + n : acc), 0);
console.log(sumaPares); // 12