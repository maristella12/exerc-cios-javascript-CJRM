
const link = document.querySelector('a')

//console.log(link.getAttribute(`href`))
// A invocaçao do método abaixo recebe dois argumentos ...
// O nome do atributo a ser modificado e o segundo é o valore a ser inserido

link.setAttribute('href', 'https://twitter.com/rogermelodev')

link.innerText = 'Website do Roger Melo'

const paragraph = document.querySelector('p')

console.log(paragraph.getAttribute('class'))

paragraph.setAttribute('class','success')

paragraph.setAttribute('style', 'color:green')