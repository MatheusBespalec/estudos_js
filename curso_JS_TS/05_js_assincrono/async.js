function load(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (typeof msg != 'string') return reject('BAD VALUE')
            resolve(msg.toUpperCase() + ' passou pela promisse')
        }, time)
    })
}

async function execute() {
    try{
        let p1 = await load('Fase 1', 2000)
        console.log(p1)

        let p2 = await load(200, 3000)
        console.log(p2)

        let p3 = await load('Fase 3', 1000)
        console.log(p3)
    } catch (e) {
        console.log(e)
    }
}

execute()