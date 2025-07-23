/**SPREAD OPERATOR:
 El operador son 3 puntos "...""
 Hace un copia del contenido de un objeto o un array
 */

//OBJETO

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

const partyPersonaje = {...party, ...personaje};

console.log(partyPersonaje);

//ARRAY

const partyArray = ['Curse of the Crimson Throne', 'Los Complicadores', ['Gërd El Rojo', 'Evil Lyn', 'Gerardo de la Rivera', 'Gilgamesh', 'Morgan']];
const personajeArray = ['Gërd', 'Bárbaro', 'Furia'];

const partyPersonajeArray = [...partyArray/*.flat()*/, ...personajeArray]/*.flat()*/;

console.log(partyPersonajeArray/*.flat()*/);