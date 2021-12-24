function rand(max, min) {
    min*= 1000
    max*= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function load(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg != 'string') return reject('BAD VALUE')
        setTimeout(() =>
            resolve(msg)
        , time)
    })
}

load('Mensagem 1', rand(1, 3))
    .then(response => {
        console.log(response)
        return load(123, rand(1, 3))
    })
    .then(response => {
        console.log(response)
        return load('Mensagem 3', rand(1, 3))
    })
    .then(response => console.log(response))
    .catch(e => console.log(e))