
     //Cria um elemento <li></li>  
/*const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {

    const li = document.createElement('li')

    li.textContent = 'Novo item'
    ul.prepend(li)
}) */

//Remove um elemento <li></li>
/*
const lis = document.querySelectorAll('li')


lis.forEach(li => {
    li.addEventListener('click', event =>{

        const clickedElement = event.target
        console.log('Clicou na Li')

        event.stopPropagation()
        clickedElement.remove()
    })
});

ul.addEventListener('click', () => {

    console.log('Clicou na UL')
})
*/

//Delegation

const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')

    li.textContent = 'Novo item'
    ul.prepend(li)
})

ul.addEventListener('click', event => {

const clickedElement = event.target

if(clickedElement.tagName === 'LI'){
    clickedElement.remove()
}

})
   
    