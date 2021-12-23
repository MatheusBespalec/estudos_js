// Object.freeze trava o objeto e não deixa que ele seja alterado (sendo mais especifico, ele trava o endereço de memória)
function People(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

function Dog(color, size) {
    this.color = color
    this.size = size

    Object.freeze(this)
}

let p = new People('Roger', 'Oliveira')
let p2 = p // Ja que ele tava o endereço de memoria, obj copiados também não poderão sofrer alterações
p.firstName = 'Douglas'
console.log(p)
Object.freeze(p)
p.lastName = 'Silva'
console.log(p)
p2.firstName = 'Rodrigo'
console.log(p2)

let d = new Dog('White', 'Ordinary')
d.color = 'Black'
console.log(d)


