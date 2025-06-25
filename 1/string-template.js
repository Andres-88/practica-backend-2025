/** Los String Templates sirven para poder embeber scripts en el string. Se utilizan los backtics */

const personaje1 = {
    nombre: 'Gërd',
    edad: 40,
    poder: 'Furia'
}

const personaje2 = {
    nombre: 'Evil-Lyn',
    edad: 40,
    poder: 'Fire Ball'
}

const personaje3 = {
    nombre: 'Gilgamesh',
    edad: 30,
    poder: 'Música hipnotizante'
}

const personaje4 = {
    nombre: 'Gerardo',
    edad: 40,
    poder: 'Like a Chimenea'
}

const imprimirNombre = personaje => console.log(`El nombre de este personaje es ${personaje.nombre}`);

imprimirNombre(personaje1);
imprimirNombre(personaje2);
imprimirNombre(personaje3);
imprimirNombre(personaje4);