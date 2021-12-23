function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(value) {
    this.preco+= value
}

Produto.prototype.desconto = function(value) {
    this.preco-= value
}

function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa

let c1 = new Camisa('Regata', 40, 'Branca')

console.log(c1)
c1.aumento(20)
console.log(c1)