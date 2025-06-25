class Persona {
  //Atributos o propiedad
  static cantidadPersonas = 0;
  nombre = "";
  edad = 0;
  ciudad = "";
  vida = 0;
  fuerza = 0;
  //Constructor
  constructor(nombre, edad, ciudad, vida) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.vida = vida;
    Persona.cantidadPersonas++;
  }
  //Métodos
  comer(cantidad) {
    if (this.vida === 150) {
      console.log("No se puede comer más");
      return;
    }

    if (this.vida + cantidad > 150) {
      this.vida = 150;
      return;
    }

    this.vida = this.vida + cantidad;
    console.log(this.vida);
  }

  getCantidadPesonas() {   //Método que sirve para recuperar el valor Static desde una instancia (getter)
    console.log(`Hay ${Persona.cantidadPersonas} personaje/s creado/s`);
  }

  entrenar(cantidad) {
    if (this.vida <= 50) {
      console.log("No se puede hacer ejercicio");
      return;
    }
    this.vida = this.vida - cantidad;
    this.fuerza = this.fuerza + cantidad;
    console.log(`vida: ${this.vida}\nfuerza: ${this.fuerza}`);
  }

  mudarse(ciudad) {
    if (this.vida <= 20) {
      console.log("No podés mudarte");
      return;
    }

    this.vida = this.vida - 20;
    this.ciudad = ciudad;
  }
}

const persona1 = new Persona("Gërd", 40, "Categat", 150);
console.log(persona1);
persona1.getCantidadPesonas();

persona1.entrenar(10);
// console.log(`vida: ${persona1.vida}\nfuerza: ${persona1.fuerza}`);
console.log(persona1);

persona1.comer(20);
console.log(persona1);

persona1.mudarse('Corvosa');
console.log(persona1);

const persona2 = new Persona ('Evil Lyn', 40, 'Facultad de Magia y Hechicería', 100);
persona2.getCantidadPesonas();



// console.log(persona2);
// console.log(Persona.cantidadPersonas);
// const persona3 = new Persona ('Gilgamesh', 32, 'La comarca', 80);
// console.log(persona3);
// console.log(Persona.cantidadPersonas);
// const persona4 = new Persona ('Gerardo', 40, 'Algún bar', 150);
// console.log(persona4);
// console.log(Persona.cantidadPersonas);

//En cambio un objeto se ve así en la consola:
// const personaObjeto = {
//     nombre: 'Gerardo',
//     edad: 40,
//     ciudad: 'Algún bar',
//     vida: 150
// }

// console.log(persona);
