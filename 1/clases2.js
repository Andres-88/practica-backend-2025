class Contador {
  static contadorDeContadores = 0;
  nombre = "";
  contador = 0;

  constructor(nombre) {
    this.nombre = nombre;
  }

  getResponsable() {
    console.log(`El nombre del responsable contador es ${this.nombre}`);
  }

  getContadorDeContadores() {
    console.log(`Contador Global: ${Contador.contadorDeContadores}`);
  }

  getCuentaIndividual() {
    console.log(`${this.nombre} contó ${this.contador}`);
  }

  contar() {
    this.contador++;
    Contador.contadorDeContadores++;
    // console.log(
    //   `${this.nombre} contó: ${this.contador}\nE incrementa el valor del contador global a: ${Contador.contadorDeContadores}`
    // );
  }
}

const contador1 = new Contador("Roberto");
contador1.getResponsable();
contador1.getContadorDeContadores();
// console.log(contador1);
contador1.contar();
contador1.contar();
contador1.getCuentaIndividual();
contador1.getContadorDeContadores();
// console.log(contador1);
const contador2 = new Contador("Tito");
contador2.getResponsable();
// console.log(contador2);
contador2.contar();
contador2.getCuentaIndividual();
contador2.getContadorDeContadores();
