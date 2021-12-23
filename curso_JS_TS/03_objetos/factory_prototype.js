function peopleFactory(name) {
    let peoplePrototype = {
        falar() {
            console.log(`${this.name} esta falando!`)
        },
        comer() {
            console.log(`${this.name} esta comendo!`)
        },
        beber() {
            console.log(`${this.name} esta bebendo!`)
        },
    }

    return Object.create(peoplePrototype, {
        name: {value: name}
    })
}

let p1 = peopleFactory('Roger')
console.log(p1)