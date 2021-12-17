class Expenditure {
    constructor(year, month, day, type, description, value) {
        this.year = year
        this.month = month
        this.day = day
        this.type = type
        this.description = description
        this.value = value
    }

    validate() {
        for(let i in  this) {
            if (! this[i]) {
                return false
            }
        }
        return true 
    }
}

class DB {
    constructor() {
        let id = localStorage.getItem('id')

        if (! id) {
            localStorage.setItem('id', 0)
        }
    }

    getNextId() {
        let id = localStorage.getItem('id')
        return parseInt(id) + 1
    }

    store(expenditure) {
        let id = this.getNextId()

        localStorage.setItem(id, JSON.stringify(expenditure))
        localStorage.setItem('id', id)
    }

    loadResources() {
        let id = this.getNextId();
        let expenditures = Array()

        for (let i = 1; i < id; i++) {
            let expenditure = JSON.parse(localStorage.getItem(i))

            if (expenditure) {
                expenditure.id = i
                expenditures.push(expenditure)
            }
        }

        return expenditures
    }

    remove(id) {
        localStorage.removeItem(id)
        filterResources()
    }
}

class Modal {
    constructor() {
        this.title = document.getElementById('modalTitle')
        this.body = document.getElementById('modalBody')
        this.btn = document.getElementById('modalBtn')
    }

    createError() {
        // Set Elements Values
        this.title.innerHTML = 'Erro ao inserir registro!'
        this.title.className = 'modal-title text-danger'

        this.body.innerHTML = 'Um ou mais campos não foram preenchidos...'

        this.btn.innerHTML = 'Voltar e Corrigir'
        this.btn.className = 'btn btn-danger'
        $('#modal').modal('show')
    }

    createSuccess() {
        // Set Elements Values
        this.title.innerHTML = 'Registro inserido com sucesso!'
        this.title.className = 'modal-title text-success'

        this.body.innerHTML = 'Sua despesa foi cadastrada com sucesso'

        this.btn.innerHTML = 'Voltar'
        this.btn.className = 'btn btn-success'
        $('#modal').modal('show')
    }
}

let db = new DB()

function createExpenditure() {
    // Form Elements
    let year = document.getElementById('year').value
    let month = document.getElementById('month').value
    let day = document.getElementById('day').value
    let type = document.getElementById('type').value
    let description = document.getElementById('description').value
    let value = document.getElementById('value').value
    
    let expenditure = new Expenditure(year, month, day, type, description, value)

    if (expenditure.validate()) {
        db.store(expenditure)
        document.getElementById('form').reset()
        let modal = new Modal()
        modal.createSuccess()
        return true
    }
    let modal = new Modal()
    modal.createError()
    return false
}

function showExpenditure(expenditures) {
    let table = document.getElementById('bodyTable')
    table.innerHTML = ''

    expenditures.forEach(expenditure => {
        let row = table.insertRow()

        switch (parseInt(expenditure.type)) {
            case 1:
                expenditure.type = 'Alimentação'
                break
            case 2:
                expenditure.type = 'Educação'
                break
            case 3:
                expenditure.type = 'Lazer'
                break
            case 4:
                expenditure.type = 'Saúde'
                break
            case 5:
                expenditure.type = 'Transporte'
                break
        }

        row.insertCell(0).innerHTML = `${expenditure.day}/${expenditure.month}/${expenditure.year}`
        row.insertCell(1).innerHTML = expenditure.type
        row.insertCell(2).innerHTML = expenditure.description
        row.insertCell(3).innerHTML = expenditure.value

        let btn = document.createElement('button')
        btn.className = 'btn btn-danger'
        btn.innerHTML = 'Remover'
        btn.id = 'desapersa_' + expenditure.id
        btn.onclick = function() {
            let id = this.id.replace('desapersa_', '')
            db.remove(id)
        }
        row.insertCell(4).append(btn)
    })
}

function getResources() {
    let expenditures = db.loadResources()
    showExpenditure(expenditures)
}

function filterResources() {
    // Form Elements
    let year = document.getElementById('year').value
    let month = document.getElementById('month').value
    let day = document.getElementById('day').value
    let type = document.getElementById('type').value
    let description = document.getElementById('description').value
    let minValue = document.getElementById('minValue').value
    let maxValue = document.getElementById('maxValue').value

    let expenditures = db.loadResources()
    if (year) {
        expenditures = expenditures.filter(e => e.year == year)
    }

    if (month) {
        expenditures = expenditures.filter(e => e.month == month)
    }

    if (day) {
        expenditures = expenditures.filter(e => e.day == day)
    }

    if (type) {
        expenditures = expenditures.filter(e => e.type == type)
    }

    if (description) {
        expenditures = expenditures.filter(e => e.description == description)
    }

    if (minValue) {
        expenditures = expenditures.filter(e => parseFloat(e.value) >= parseFloat(minValue))
    }

    if (maxValue) {
        expenditures = expenditures.filter(e => parseFloat(e.value) <= parseFloat(maxValue))
    }
    
    showExpenditure(expenditures)
}

