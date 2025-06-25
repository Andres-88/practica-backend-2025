/**Tipos Primitivos:
 * Number
 * String
 * Boolean
 * Null
 * Undefined
 * Symbol
 */
const numero = 1;
console.log(numero + ': ', typeof numero);
const cadena = 'Güerd';
console.log(cadena, ': ', typeof cadena);
const verdadero = true;
console.log(verdadero + ': ', typeof verdadero);
const falso = false;
console.log(falso + ': ', typeof falso);

const nulo = null; //null es un tipo primitivo de dato, sale Object pero es un bug que no corrigieron por temas de compatibilidad
console.log(typeof nulo);
//Demostración:
if(nulo === null){
    console.log('¿Viste que no es Object?');
}

//Conclusión:
let a;                 // undefined
let b = null;          // null
let c = {};            // objeto vacío

console.log(typeof a); // "undefined"
console.log(typeof b); // "object" (bug)
console.log(typeof c); // "object"

console.log(a === undefined); // true
console.log(b === null);      // true
console.log(c === null);      // false
