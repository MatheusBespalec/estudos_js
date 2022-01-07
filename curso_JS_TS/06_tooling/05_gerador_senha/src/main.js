import './assets/css/style.css';

import generatePass from './modules/generatePass';

let password = document.querySelector('.password')
let btn = document.querySelector('.generate-pass')
let qtd = document.querySelector('.qtd')
let uppercase = document.querySelector('.uppercase')
let lowercase = document.querySelector('.lowercase')
let number = document.querySelector('.number')
let symbol = document.querySelector('.symbol')

btn.addEventListener('click', () => {
    let pass = generatePass(qtd.value, uppercase.checked, lowercase.checked, number.checked, symbol.checked)

    password.innerHTML = pass
})
