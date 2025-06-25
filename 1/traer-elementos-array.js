const complicadores = [
  {
    nombre: "Gërd",
    edad: 40,
    poder: "Furia",
  },

  {
    nombre: "Evil-Lyn",
    edad: 40,
    poder: "Fire Ball",
  },

  {
    nombre: "Gilgamesh",
    edad: 30,
    poder: "Música hipnotizante",
  },

  {
    nombre: "Gerardo",
    edad: 40,
    poder: "Like a Chimenea",
  },
];

const arrayVacio = [];

/**Versión con función complpeta. Funciona */
// function printAll (complicador) {
//     for (compliqueti of complicador){
//         console.log(`El nombre del complicajor es: ${compliqueti.nombre} `);
//     }
// }

// printAll (complicadores);

/**Versión con función flecha */

const todosLosnombres = (complicador) => {
  if (complicador.length === 0) {
    console.log("Lista Vacía");
    return;
  }

  for (let compliqueti of complicador) {
    console.log(`El nombre del complicador es: ${compliqueti.nombre} `);
  }
};

todosLosnombres(complicadores);
todosLosnombres([]);
