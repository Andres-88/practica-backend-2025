/**Includes es un método agregado en ES7 que recibe por parámetro una cadena para ver si
 * se encuentra como parte de otra cadena.
 * O si se encuentra COMO ELEMENTO de un array.
 */

const palabra1 = 'bet';
const palabra2 = 'beto';
const array = ['alfa', 'beta', 'beto', 'delta', 'alfabeto'];

const incluye_al = palabra1.includes('al');
console.log(incluye_al);

const incluye_be = palabra2.includes('be');
console.log(incluye_be);

const incluye_palabra1 = array.includes(palabra1);
console.log(incluye_palabra1);

const incluye_palabra2 = array.includes(palabra2);
console.log(incluye_palabra2);