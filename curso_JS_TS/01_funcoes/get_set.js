function createPeople(name, years, role) {
    return {
        name,
        years,
        role,
        /* 
         * Quando colocamos o get antes de uma função declaramos que estamos pegando um valor, logo não é nescessario
         * executar uma função 'talk', no caso, se torna apenas um atributo que estamos recuperando 
         */
        get talk() {
            console.log(this.name, 'esta falando!')
        },

        /* 
         * Quando colocamos o get antes de uma função declaramos que estamos definindo um valor, logo não é nescessario
         * executar a função, além do valor que esta sendo atribuido pode ser passado como parametro
         */
        set birthday(value) {
            this.years = value
        }
    }
}

let p1 = createPeople('Fernando', 20, 'Developer')
console.log(p1.years)
p1.talk
p1.birthday = 25
console.log(p1.years)