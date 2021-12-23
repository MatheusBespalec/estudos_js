let numbers = [2, 5, 7, 8, 6, 4]
// Soma do dobro de tds os pares
let x = numbers
    .filter(value => value % 2 == 0)
    .map(value => value * 2)
    .reduce((ac, value) => ac+= value)

console.log(x)