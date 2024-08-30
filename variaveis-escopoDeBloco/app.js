
let age = 31 // escopo global

if(true) {
age = 41
let name = 'Roger'

console.log(`dentro do 1 bloco de código: ${age}`)

if(true) {
    console.log(`Dentro do 2 bloco de código? ${age}`)
    }
}

console.log(`fora do bloco de código: ${age} ${name}`)