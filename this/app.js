

let user = {
    name: 'João',
    age: 31,
    email: 'joaocarlos@gnmail.com',
    city: 'São Paulo',
    blogPosts: [ 
        {title: 'Empadão de frango', likes:`tem 30 likes` },
        {title: '4 receitas de purê de batata', likes: `tem 50 likes`}
               ],
    login () {
        console.log('Usuário logado')
    },
    logout () { // sintaxe de shortcut
        console.log('Usuário deslogado')
    },
    //deve ser usado function declaration(referenciao o objeto) 
    //e nao function expression (referencia o window)
    logBLogPosts (){ // sintaxe de shortcut
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(post => {
            console.log(post.title, post.likes)
        }) // a palavra 'this' referencia o objeto user
    }

}
user.logBLogPosts()
// "FUNCTION DECLARATION É USADA COM O THIS"
//SHORTCUT: "LOGOUT: FUNCTION()"" MAS PODE SER USADA ASSIM "LOGOUT ()""
