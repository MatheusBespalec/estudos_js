var width = window.innerWidth
var height = window.innerHeight
var lives = 3
var time = 30
var delay = 2500
var level = window.location.search.replace('?', '')

// Definir Tempo inicial na pagina
document.getElementById('timer').innerHTML = time

// Definir Tamanho da tela ao redimensionar
function resize() {
    width = window.innerWidth
    height = window.innerHeight
}

// Gerar tamanho dos mosquitos
function randomSize() {
    size = Math.floor(Math.random() * 3)

    switch (size) {
        case 0:
            return 'size1'

        case 1:
            return 'size2'

        case 2:
            return 'size3'
    }
}

// Inverter o lado da imagem dos mosquitos
function invert() {
    var invert = Math.floor(Math.random() * 2) 

    if (invert == 1) {
        return 'invert'
    }
    return ''
}

// Criar mosquito
function createMosquito() {
    var mosquito = document.getElementById('mosquito')
    if (mosquito) {
        mosquito.remove()

        var life = document.getElementById('life' + lives--)
        life.src = 'images/coracao_vazio.png'

        if(lives == 0) {
            window.location.href = 'game_over.html'
            return false
        }
        
    }

    x = Math.floor(Math.random() * width) - 90
    y = Math.floor(Math.random() * height) - 90

    x = x < 0 ? 0 : x
    y = y < 0 ? 0 : y

    mosquito = document.createElement('img');
    mosquito.id = 'mosquito';
    mosquito.src = 'images/mosquito.png';
    mosquito.className = 'mosquito ' + randomSize() + ' ' + invert()
    mosquito.style.left = x + 'px'
    mosquito.style.top = y + 'px'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

// Mudar o tempo e caso chegue a 0 redirecionar para pagina de vitoria
function timer() {
    var timer = document.getElementById('timer')
    timer.innerHTML = --time

    if (time == 0) {
        window.location.href = 'victory.html'
    }
}

setInterval(function() {
    createMosquito()
    timer()
}, delay / level)


