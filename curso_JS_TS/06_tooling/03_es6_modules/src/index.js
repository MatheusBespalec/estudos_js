import x, { name as name2, soma } from './modulo1'
// import x from './modulo1'
import * as test from './modulo2'
import myColor from './modulo3'

let name = 'Alex'
let car = new test.Car('Fusca', 'Azul')
console.log(car)
console.log(x)
console.log(myColor)
console.log(name, name2)
console.log(soma(5, 6))