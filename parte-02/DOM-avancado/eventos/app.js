
/*
const ul = document.querySelector('ul')
ul.remove() 
*/
//Selecionar um botão
// Especificar que quer escutar um clique no botão
/*
button.addEventListener('click', () => {
    
    console.log('Clicou no botão!')
    
    }) 
    
    
   const lista = document.querySelectorAll('li')
   /*
   lista.forEach(li =>{
    
    li.addEventListener('click', evento =>{
        const clickedElement =  evento.target
        clickedElement.style.textDecoration = 'line-through'
        
        })
        })
        */
       /*
const button = document.querySelector('button')

button.addEventListener('click', () => {

console.log('jjj')
})


const lis = document.querySelectorAll('li')

lis.forEach(li => {
    // O Objeto event abaixo contem informações sobre o evento que aconteceu
    li.addEventListener('click', event => {
        console.log(event.target)
        //O event.target mostra o elemento no console(<li>Comprar frango</li>)
/*
  const clickedElement = event.target
  clickedElement.style.textDecoration = 'line-through'


    })
});

*//*
const lis = document.querySelectorAll('li')

lis.forEach(li => {
    // O Objeto event abaixo contem informações sobre o evento que aconteceu
    li.addEventListener('click', event => {
        
        const clickedElement = event.target
        clickedElement.remove()
        })
        });
        */
       
const ul = document.querySelector('ul')
const li = document.querySelector('li')

const button = document.querySelector('button')

button.addEventListener('click', () => {

   // ul.innerHTML += '<li> Adicionar Novo Item </li>'
   const li = document.createElement('li')
   li.textContent = 'Novo Item'
   //ul.append(li)
   ul.prepend(li)


})