//Função Geradora
/*
function* generate() {
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
}

let generator = generate()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

let generator2 = generate()
for (value of generator2) {
    console.log(value)
}
*/

// Geradora infinita
/*
function* generate2() {
    let i = 0
    while (true) {
        yield i // Quando a função é chamada dnv ela inicia dps do ultimo yield
        i++
    }
}

let generator3 = generate2()

console.log(generator3.next().value)
console.log(generator3.next().value)
console.log(generator3.next().value)
console.log(generator3.next().value)
console.log(generator3.next().value)
console.log(generator3.next().value)
console.log(generator3.next().value)
*/

// Geradora dentro de geradora
function* generate1() {
    yield 1
    yield 2
    yield 3
}

function* generate2() {
    yield* generate1()
    yield 4
    yield 5
    yield 6
}

let g = generate2()

for (value of g) {
    console.log(value)
}
// Caso tenha um return na função finaliza e os próximos yield não serao retornados