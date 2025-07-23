const personaje = {
    nombre: 'Gërd',
    tipo: 'Bárbaro',
    poder: 'Furia'
}
//Object.keys(objeto) devuelve los nombres de los atributos. Las "Llaves" en forma de un array de Strings
const llaves = Object.keys(personaje);
console.log(llaves);
//Object.values(objeto) devuelve los valores de los atriburos en forma de un array de Strings
const valores = Object.values(personaje);
console.log(valores);
/**Object.entries(objeto) devuelve un array de arrays cuyos elementos son el nombre y el valor
 de los atributos:
 [[clave, valor], [clave, valor], [clave, valor]]
 */
const entradas = Object.entries(personaje);
console.log(entradas);