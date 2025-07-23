/** FLAT ES UN MÉTODO DE EC10 QUE APLANA LOS NIVELES DE UN ARRAY QUE CONTENGA ARRAYS EN 1 NIVEL*/

const partyArray = ['Curse of the Crimson Throne', 'Los Complicadores', ['Gërd El Rojo', 'Evil Lyn', 'Gerardo de la Rivera', 'Gilgamesh', 'Morgan']];
const personajeArray = ['Gërd', 'Bárbaro', 'Furia'];

const partyPersonaje = [partyArray, personajeArray];
console.log('Sin Flat:');

// console.log(partyPersonaje);
const conFlat = (partyPersonaje.flat()).flat(); //En este caso se aplanó 2 veces para dejar a todos los componentes en el mismo nivel
console.log(conFlat);
