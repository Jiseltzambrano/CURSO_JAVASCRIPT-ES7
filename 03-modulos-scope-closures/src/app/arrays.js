//funcion sumArray, funcion que permite sumar todos los elementos de un array 
// por una propiedad 
const arr =[1, 2, 2, 1]
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray(arr)); 

//funcion averageArray, funcion que permite calcular el promedio de todos los elementos de un array 
const numeros = [1, 2, 3, 1];
function averageArray(arr) {
    if (arr.length === 0) return 0;
    let suma = 0;
    for (let numero of arr) {
        suma += numero;
    }
    let promedio = suma / arr.length;
    return promedio;
}
console.log("El promedio es:", averageArray(numeros)); 

//funcion groupArrayBy, funcion que permite agrupar los elementos de un array 

const productos = [
    { nombre: 'Manzana', categoria: 'Fruta' },
    { nombre: 'Cebolla', categoria: 'Verdura' },
    { nombre: 'Pera', categoria: 'Fruta' },
    { nombre: 'Zanahoria', categoria: 'Verdura' }
];

function groupArrayBy(arr, propiedad) {
    return arr.reduce((acumulador, objetoActual) => {
        // 1. Extraemos el valor de la propiedad por la que queremos agrupar (ej. 'Fruta')
        const clave = objetoActual[propiedad];

        // 2. Si esa categoría aún no existe en nuestro acumulador, la creamos como un array vacío
        if (!acumulador[clave]) {
            acumulador[clave] = [];
        }

        // 3. Empujamos el objeto actual dentro de su categoría correspondiente
        acumulador[clave].push(objetoActual);

        // 4. Devolvemos el acumulador para la siguiente vuelta
        return acumulador;
    }, {}); // El {} indica que empezamos con un objeto vacío
}

const agrupados = groupArrayBy (productos, 'categoria');
console.log(agrupados);

