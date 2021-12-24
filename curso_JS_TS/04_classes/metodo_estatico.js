class ControleRemoto{
    constructor(marca) {
        this.marca = marca
        this.volume = 0
    }

    aumentarVol() {
        if (this.volume < 100) this.volume+= 2
    }

    diminuirVol() {
        if (this.volume > 0) this.volume-= 2
    }

    static trocarPilhas() {
        console.log('Pilhas trocadas!')
    }
}

let c = new ControleRemoto('LG')
c.aumentarVol()
c.aumentarVol()
c.aumentarVol()
console.log(c)

ControleRemoto.trocarPilhas()