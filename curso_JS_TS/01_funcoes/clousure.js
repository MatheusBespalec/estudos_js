// Clousure basicamente é a habilidade da função de acessar o seu escolo lexico
function teste(idade) {
    let nome = 'Matheus';
    return function() {
        console.log(nome, idade)
    }
}

let func = teste(19)
let func2 = teste(22)

func()
func2()