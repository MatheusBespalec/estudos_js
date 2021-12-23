// Reduce reduz o array para um unico valor
let numbers =  [3, 3]
let sum = numbers.reduce((accumulator, value) => {
    console.log(value)
    return accumulator+= value
}, 0) // O valor do acumulador pode ser omitido, sendo assim sera admitido o primeiro valor do array

console.log(sum)