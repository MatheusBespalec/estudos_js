let a1 = [1, 2, 3, 4]
let a2 = [6, 7, 8, 9]
// Método 1: retorna um obj
// let a3 = a1.concat(a2)

// Método 2
let a3 = [...a1, 5, ...a2]

console.log(a3)