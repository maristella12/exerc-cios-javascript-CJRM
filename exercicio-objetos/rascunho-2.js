//características são propriedasde e ações sao chamdas e métodos (funções)

//criando um objeto literal

let user = {
    name: 'João',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango','4 receitas de purê de batata'],
    login:function(){
        console.log('Usuário logado')
    },
    logout:function(){
        console.log('usuário deslogado')
    }
}
console.log(user.name.toLocaleUpperCase())
user.login()
user.logout()
