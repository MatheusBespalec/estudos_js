function newProduct(name, price) {
    return { name, price }
}

let p1 = newProduct('Caneca', 2)
let p2 = Object.assign({}, p1, { color: 'blue' })// Copia o objeto e opcionamente podemos adicionar campos
p2.name = 'Caneca 2'

console.log(p1)
console.log(Object.getOwnPropertyDescriptor(p1, 'name')) // Mosta as configurações que podem ser feitas por defineProperty
for (let [name, value] of Object.entries(p1)) { // retorna um array com a chave e o valor para cada par do obj
    console.log(name, value)
}
console.log(Object.values(p2)) // retorna os valores das chaves do obj