let people = [
    {id:1, firstName:'Gërd', lastName:'Odinson', age:44, gender:'M'},
    {id:2, firstName:'Evil', lastName:'Lyn', age:40, gender:'F'},
    {id:3, firstName:'Gerardo', lastName:'De la Rivera', age:39, gender:'M'},
    {id:4, firstName:'Gilgamesh', lastName:'Don Juan', age:33, gender:'M'}
]

console.log(typeof people);

let person = people.find(p => p.id === 3);    //La función que se pasa como argumento de otra función se la llama Callback

console.log(person);