function Product(name, price, store) {
    this.name = name
    this.price = price

    // let privateStore = store

    Object.defineProperty(this, 'store', {
        enumerable: true, //Se mostra ou não a chave
        configurable: false, // Se pode ser configurado / deletado
        get: () => store,
        set: value => store+= value,
    })

    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: false,
            configurable: false
        },
        price: {
            enumerable: true,
            value: price,
            writable: true,
            configurable: true
        }
    })
}

let p1 = new Product('Celular', 700, 150)

// console.log(Object.keys(p1))
p1.store = 20
console.log(p1.store)
console.log(p1)

