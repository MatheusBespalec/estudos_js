function Cpf(cpf) {
    this.cpf = cpf
}

Cpf.prototype.generateDigits = function() {
    for (let x = 10; x <= 11; x++) {
        let sum = this.numbers
            .map((n, i) =>  n * (x - i))
            .reduce((sum, n) => sum+= n, 0)

        let digit = 11 - (sum % 11)
        digit = (digit > 9) ? 0 : digit
        this.numbers.push(digit)
    }
}

Cpf.prototype.validate = function() {
    let cleanCpf = this.cpf.replace(/\D+/g, '')
    let cpf = cleanCpf.slice(0, -2)

    this.numbers = Array.from(cpf)
    this.generateDigits()

    let validatedCpf = this.numbers.join('')

    return (cleanCpf == validatedCpf) ? 'CPF Válido' : 'CPF Inválido';
}

let p = new Cpf('479.324.338-00')
console.log(p.validate())