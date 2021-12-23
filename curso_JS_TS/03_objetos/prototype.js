let objA = { keyA: 'A' }
let objB = { keyB: 'B' }

Object.setPrototypeOf(objB, objA)
console.log(Object.getPrototypeOf(objB))

function Product(name, price) {
    this.name = name
    this.price = price
}

Product.prototype.decrement = function(value) {
    return this.price-= value
} 
Product.prototype.increment = function(value) {
    return this.price+= value
} 

let p = new Product('Pen Drive', 50)
console.log(p)
console.log(p.decrement(30))
console.log(p)
console.log(p.increment(20))
console.log(p)

let p2 = Object.create(Product.prototype, {
    name: {
        enumerable: true,
        writable: false,
        value: 'Caneca',
        configurable: false
    },
    price: {
        enumerable: true,
        writable: false,
        value: 5,
        configurable: false
    },
})

console.log('p2',p2)