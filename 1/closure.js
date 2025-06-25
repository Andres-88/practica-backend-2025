/**Un Closure es una función que recuerda el ámbito (scope) en el que fue creada, 
incluso después de que ese ámbito haya terminado de ejecutarse.
 *  En otras palabras:
    Una función puede acceder a variables de su entorno exterior, aunque ese entorno ya no esté activo.
*/

//Ejemplo 1:
function crearContador() {
  let contador = 0;

  return function () {
    contador++;
    console.log(`Contador: ${contador}`);
  };
}

const contar = crearContador();

contar(); // Contador: 1
contar(); // Contador: 2
contar(); // Contador: 3

/**¿Qué pasó acá?
 * crearContador() devuelve una función.
 * Esa función RECUERDA la variable contador aunque crearContador() ya terminó.
 * Eso es una closure: la función interna mantiene acceso a su entorno externo (contador).
 */

//Ejemplo 2: Proteger una variable
function secreto(nombreSecreto) {
  return function () {
    console.log(`El secreto es: ${nombreSecreto}`);
  };
}

const mostrarSecreto = secreto("Batman es Bruce Wayne");

mostrarSecreto(); // El secreto es: Batman es Bruce Wayne

/**Nadie puede modificar nombreSecreto desde fuera, pero la función lo sigue recordando. */

/**Ejemplo 3: Generar funciones configurables */

function saludar(nombre) {
    return function (mensaje) {
      console.log(`${mensaje}, ${nombre}!`);
    };
  }
  
  const saludarAJuan = saludar("Juan");
  saludarAJuan("Hola");         // Hola, Juan!
  saludarAJuan("Bienvenido");   // Bienvenido, Juan!

  /**La función que devuelve la función saludar() es la que se guarda en la variable saludarAJuan y
   * con ella el valor del nombre que se le pasó como parámetro a la función saludar("Juan")
   * Luego se le pasa todos los parámetros que quieras (por eso "configurable") como mensaje,
   * pero el nombre queda GUARDADO siendo que el
   * ámbito en el que se creó ya no está.
  */