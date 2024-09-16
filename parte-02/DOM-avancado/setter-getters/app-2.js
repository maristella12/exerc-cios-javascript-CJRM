const title = document.querySelector('h1')

//title.setAttribute('style','margin:50px')


//como adicionar estilos sem sobrescrever o estulo anterior

console.log(title.style)
console.log(title.style.color)

title.style.margin = '50px'
title.style.color = 'pink'

title.style.fontSize = '50px'
title.style.margin = ''

