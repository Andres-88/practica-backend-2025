/**Realizar una lista nueva (array) que contenga todos los tipos de productos (no cantidades)
 * Consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)
 */
const objetos = [{
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2
},

{
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4
}];

const todosLosProductosNeto = []; //Array Final

for (let objeto of objetos){
    const productos = Object.keys(objeto); //Obtengo las keys de cada objeto del array "objetos" en un array
    
    for(let producto of productos){ //Obtengo cada elemento del array que son solamente las key
        if(!todosLosProductosNeto.includes(producto)){ //Si la Key no está en el array nuevo, lo agrego
            todosLosProductosNeto.push(producto);
        }
    }
}

console.log(todosLosProductosNeto); //Muestro el array nuevo

//TOTAL DE PRODUCTOS VENDIDOS
const totalProductosVendidos = [];

for (let objeto of objetos){
    console.log(objeto);
    const cantProdVendidos = Object.values(objeto);
    let totalVendido = 0;
    console.log(cantProdVendidos);
    for (let productoVendido of cantProdVendidos){
        // console.log(productoVendido);
        totalVendido = totalVendido + productoVendido;
    }
    console.log(totalVendido);
}




//--------------------------------------------------------------------------------------
//Versión Malarda
//Desestructuro el array de objetos en 2 objetos y los guardo en 2 variables
// let [objeto1, objeto2] = objetos;

//Obtengo solamente las keys y las guardo en otras variables

// const keysObjeto1 = Object.keys(objeto1);
// const keysObjeto2 = Object.keys(objeto2);

// let todasLasKeyProductosBrutos = [keysObjeto1, keysObjeto2];

// todasLasKeyProductosBrutos = todasLasKeyProductosBrutos.flat();
// console.log(todasLasKeyProductosBrutos);

// const todosLosProductosNeto = [];

// for (let producto of todasLasKeyProductosBrutos){
//     if (!todosLosProductosNeto.includes(producto)){
//         todosLosProductosNeto.push(producto);
//     }
// }

// console.log(todosLosProductosNeto);
