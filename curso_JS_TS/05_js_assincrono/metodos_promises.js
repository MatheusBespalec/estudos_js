function load(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (typeof msg != 'string') return reject('BAD VALUE')
            resolve(msg.toUpperCase() + ' passou pela promisse')
        }, time)
    })
}

let promises = [
    load('Mensagem 1', 3000),
    load('Mensagem 2', 500),
    load('Mensagem 3', 1000),
    load(200, 1500),
]
// Promise.all retorna tds as promises caso tds tenham sucesso, caso contrario retorna o erro
// Promise.race retorna a primeira promise a ser resolvida
Promise.race(promises)
    .then(response => console.log(response))
    .catch(e => console.log(e))

function dowloadPage() {
    let cache = true
    if (cache) {
        return Promise.resolve('Pagina em cache')
    }
    return load('Pagina baixada!', 2000)
}
// Promise.resolve -> retorna um promisse resolvida
// Promise.reject -> retorna um promisse rejeitada
dowloadPage()
    .then(response => console.log(response))
    .catch(e => console.log(e))