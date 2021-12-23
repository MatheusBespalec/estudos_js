// Desafio: definir a chave do array people com o mesmo numero que o id da pessoa
let peoples = [
    { id: 3, name: 'Rodrigo' },
    { id: 2, name: 'Maria' },
    { id: 1, name: 'Felipe' }
]

// Método comum
/*
let newPeoples = []
for (let {id, name} of peoples) {
    console.log(id, name)
    newPeoples[id] = name
}
*/
// O problema com essa solução é q o array é reordenado em ordem crescente, o que pode ser um problema dependendo do contexto

// Método 2
let newPeoples = new Map()

for (let {id, name} of peoples) {
    newPeoples.set(id, { id: id, name: name })
}

console.log(newPeoples.get(2))

for (let [identifier, {id, name}] of newPeoples) {
    console.log('key:', identifier, '- id:', id, '- nome:', name)
}