/**La desestructuración consiste en "desarmar" estructuras como un array
 * En este caso los elementos del array fueron guardados en variables nombre y tipo
*/
const personaje = ['Gërd', 'Bárbaro', 'Furia'];
//En la linea siguiente se definen las variables donde se guardarán los respectivos elementos
const [nombre, tipo] = personaje;
console.log('El nombre del personaje es ' + nombre + ' y es un ' + tipo );
console.log(personaje);
const [ , , poder] = personaje;
console.log('Ah, me olvidaba que su poder es ' + poder);

/**DESESTRUCTURACIÓN DE UN OBJETO */

const party = {
    campania: 'Curse of the Crimson Throne',
    mesa: 'Los Complicadores',
    participantes: ['Gërd El Rojo', 'Evil Lyn', 'Gerardo de la Rivera', 'Gilgamesh', 'Morgan']
}

const{ campania } = party;

console.log(campania);
console.log(party);
