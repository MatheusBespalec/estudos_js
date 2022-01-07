let symbols = '!@#$%&'

let rand = (min, max) => Math.floor(Math.random() * (max - min) + min)

const uppercaseChar = () => String.fromCharCode(rand(65, 90))
const lowercaseChar = () => String.fromCharCode(rand(97, 122))
const numberChar = () => String.fromCharCode(rand(48, 57))
const symbolChar = () => symbols[rand(0, symbols.length)]

export default function generatePass(qtd, uppercase, lowercase, number, symbol) {
    let pass = []
    qtd = Number(qtd)

    for (let i = 0; i < qtd; i++) {
        uppercase && pass.push(uppercaseChar())
        lowercase && pass.push(lowercaseChar())
        number && pass.push(numberChar())
        symbol && pass.push(symbolChar())
    }

    return pass.join('').slice(0, qtd)
}