let fruits = ['Maçã', 'Banana', 'Goiaba', 'Melancia', 'Manga']
// No primeiro parametro informamos a posição do array, no segundo quantos elementos iremos eliminar
// No caso elimina a partir do indicie informado começando do indicie
let x = fruits.splice(1, 2)
// Retorna os valores removidos
console.log(fruits, x)

let names = ['Cleber', 'Jefferson', 'Roberto', 'Fabio', 'Flavio']
// após o segundo parametro podemos informar n parametros que serão adicionados a partir do indicie informado
let y = names.splice(2, 1, 'Paulo', 'Davi', 'Everton')

console.log(names, y)