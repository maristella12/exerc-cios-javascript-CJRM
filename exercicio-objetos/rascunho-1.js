//características são propriedasde e ações sao chamdas e métodos (funções)

//criando um objeto literal

let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango','4 receitas de purê de batata']
}

console.log(user)
console.log(user.name)

user.age = 32
console.log(user.age)

console.log(user[`email`])
const key = 'email'
console.log(user[key])