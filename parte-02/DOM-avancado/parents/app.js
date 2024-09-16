const article = document.querySelector('article');
/*
Transformando HTML Collection em ARRAY
console.log(Array.from(article.children))   

Array.from(article.children).forEach(element =>{
element.classList.add('article-element')

}) 

Array.from(article.children).forEach(element =>{

    element.classList.add('article-elementoooo')
}) 
    */
// PASSO 1 - REFERÊNCIA, PASSO 2 - CRIAR O ARRAY(SE NECESSÁRIO) E O FOREACH , PASSO -3 CRIAR O EVENTO
const h2 = document.querySelector('h2')

console.log(h2.parentElement.parentElement)
console.log(h2.nextElementSibling)
console.log(h2.previousElementSibling)
