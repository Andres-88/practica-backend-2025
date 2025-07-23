/**TAREA: PROGRAMAR LOS MÉTODOS: 
 * update(id) para buscar y actualizar un producto
 * destroy(id)para buscar y eliminar un producto
 */
class ProductsManager {
  static #all = [];
  static #id = 0;  
  constructor() {}
  /**create
   * Crea un producto
   * Se pasan como argumento los datos del producto
   * Se le agrega un ID autoincremental
   * Lo agrega al array All
   */
  create (data) {
    data.id = ProductsManager.#id;
    ProductsManager.#id++;
    ProductsManager.#all.push(data);
  }

  readAll () {
    return ProductsManager.#all;
  }

  readByTitle (arg) {
    let found = false;
    for (let finded of ProductsManager.#all) {
        //Valida si el title que es un String contiene el argumento
      if (finded.title.toLowerCase().includes(arg.toLowerCase())) {
        console.log(finded);
        found = true;
      }
    }
    if(!found){
        console.log('No se encontró ninguna coincidencia');
    }
  }

  readById (arg) {
    let found = false;
    for (let finded of ProductsManager.#all) {
        //Valida si el ID contiene el argumento
      if (finded.id === arg) {
        console.log(finded);
        found = true;
      }
    }
    if(!found){
        console.log('No se encontró ninguna coincidencia');
    }
  }

  update (id, data) {
    //Busca el índice del objeto cuyo id interesa
    const index = ProductsManager.#all.findIndex(function (producto){
      return producto.id === id;
    })
    //Si no se encuentra un objeto que cumple con el id, el método dinfIndex devuelve -1
    if (index === -1) {
      console.log('No se encontró un producto con el id', id);
      return;
    }
    //Guardamos en producto el objeto a actualizar
    let producto = ProductsManager.#all[index];

    /*Se recorre el objeto data
    Si el producto tiene una propiedad con el mismo nombre que la propidad de data,
    el método hasOwnPropery(clave)se asegura de no agregar propuesdades nuevas al producto
    */
    for (let clave in data){
      if ( producto.hasOwnProperty(clave) ) {
        producto[clave] = data[clave];
      }
    }
    console.log('Producto actualizado exitosamente', producto);
  }

  destroy (id) {
    let longitudInicial = ProductsManager.#all.length;
    // Filter genera un array con los elementos que cumplan condición de la función interna
    ProductsManager.#all = ProductsManager.#all.filter(
      function (producto) {
        return producto.id !== id;
      }
    )
    if(ProductsManager.#all.length === longitudInicial){
      console.log('No se encontró ningún objeto con id: ', id);
      console.log(ProductsManager.#all);
    } else{
      console.log('Producto eliminado exitosamente');
      console.log(ProductsManager.#all);
      
    }
  }
}

const manager = new ProductsManager();

manager.create({
  category: "shoes",
  title: "adidas",
  price: 100,
  stock: 1000,
  photo: "adidas.png",
});
manager.create({
  category: "gun",
  title: "axe",
  price: 1000,
  stock: 10,
  photo: "axe.png",
});

const todosLosProductos = manager.readAll();
// console.log(todosLosProductos);
manager.readByTitle("axe");
manager.readByTitle('adidas');

manager.destroy(0);

manager.update(0, {
  title: 'Hacha Flamígera',
  price: 10000,
  stock: 1,
  photo: 'hachaFlamigera.png'
})