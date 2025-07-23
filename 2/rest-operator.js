/**REST OPERATOR:
 * Se denota con 3 puntos como spread: "..."
 * Su función es abarcar el resto de los componentes o atributos en una sola variable (objeto o array)
 */

// EN OBJETOS
const party = {
    campania: 'Curse of the Crimson Throne',
    mesa: 'Los Complicadores',
    participantes: ['Gërd El Rojo', 'Evil Lyn', 'Gerardo de la Rivera', 'Gilgamesh', 'Morgan']
}

const personaje = {
    nombre: 'Gërd',
    tipo: 'Bárbaro',
    poder: 'Furia'
}

const partyPersonaje = {...party, ...personaje}; //Hago Spread de ambos objetos

// console.log(partyPersonaje);

const {campania, mesa, ...rest} = partyPersonaje; //Hago spread de campania y rest del resto de componentes del gran objeto

// console.log(campania);

// console.log(rest);

// console.log(mesa);
//NOTA: En los Objetos el nombre de la variable que va a apuntar al elemento que querramos traer independientemente de su lugar en la declaración
//------------------------------------------------------------------------------------------------------------------------------------------------------
// EN ARRAYS
const partyArray = ['Curse of the Crimson Throne', 'Los Complicadores', ['Gërd El Rojo', 'Evil Lyn', 'Gerardo de la Rivera', 'Gilgamesh', 'Morgan']];

const personajeArray = ['Gërd', 'Bárbaro', 'Furia'];

const partyPersonajeArray = [...partyArray, ...personajeArray];

const [barbaro, mesaArray, ...restArray] = partyPersonajeArray;
console.log(partyPersonajeArray);

console.log(barbaro);
console.log(mesaArray);
console.log(restArray);
/*NOTA: En los Arrays no importa el nombre de la variable, toma desde la primer posición en adelante.
En este caso la variable barbaro guarda el valor del primer elemento del array "Curse of the Crimson Throne"
*/