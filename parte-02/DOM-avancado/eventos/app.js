
//Selecionar um botão
const button = document.querySelector('button')
// Especificar que quer escutar um clique no botão

button.addEventListener('click', () => {
    
    console.log('Clicou no botão!')

}) 

const lista = document.querySelectorAll('li')

lista.forEach(li =>{

    li.addEventListener('click', evento =>{
        const clickedElement= evento.target
        clickedElement.style.textDecoration = 'line-through'

    })
})