// Obter um elemento através do ID
const title = document.getElementById('title')

// Obter elementos através do nome da classe
const errors = document.getElementsByClassName('error')

// Obter elementos através do nome da tag
const paragraphs = document.getElementsByTagName('p')

// Html collections nao faz forEach !
console.log(title,errors,tags)
//Melhor usar querySelector pois retorna node list!