let numbers = [1, 22 ,55 ,77 ,65, 24, 5, 18, 66]
let numbers2 = numbers.filter(value => value > 20)

console.log(numbers, numbers2)

let peoples = [
    { name: 'Henrique', years: 21 },
    { name: 'Paulo', years: 34 },
    { name: 'Giovana', years: 55 },
    { name: 'Guilherme', years: 43 },
    { name: 'Ana', years: 27 },
] 

let peoples2 = peoples.filter(obj => obj.name.toLowerCase().endsWith('e'))

console.log(peoples2)