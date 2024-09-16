//const paragraph = document.querySelector('p')

//paragraph.innerText += ' - Texto inserido ' 

const paragraphs = document.querySelectorAll('p')
// o sinal de "+" significa que o texto original sera mantido e acrescentado do novo texto 
paragraphs.forEach ((paragraph, index) => {
paragraph.innerText += ` - Texto modificado ${index +1}`

})
const div = document.querySelector('.content')
/*

div.innerHTML+= ` <h2> Nova Tag</h2>`  */

const people = ['João','Vinicius','Diego',]

people.forEach(person => {

  div.innerHTML += ` <p> O nome dos candidatos é : ${person}</p> ` 

})
