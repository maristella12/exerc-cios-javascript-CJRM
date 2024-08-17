
//Quando a Função é usada como argumento chamamos de
//função de callback ou simplesmente callback
const myFunc = callback => {
    const value = 77    

    callback(value) // aqui invocamos o parâmetro callback, 
    // o valor que ele recebe é a declaração de uma função
}   // quando invocarmos essa função precisamos inserir como argumento dessa invocação
    // a declaração de uma função

myFunc(number =>{ // inserimos uma função que  está sendo atribuída para esse parâmetro
                   // a declaração da função precisa de um parâmetro,
                  // essa função está sendo atribuída para o parâmetro callback acima
    console.log(number)
})

// Qual o fluxo de cima pra baixo ?

//1- Função declarada e depois invocada recebendo uma função por argumento
//2- A função de baixo foi atribuída para o parâmetro callback
//3- Como o callback está armazenando a função abaixo
//4- podemos invocar essa função e como ela recebe um number por parâmetro
//5- passamos o value declarado acima como argumento da invocação da função
//6- esse valor é recebido no parâmetro numero e exibido no console

const socialNetworks = ['youtube','twitter','ínstagram','facebook']
socialNetworks.forEach((socialNetwork,index,array) =>{
console.log(index,socialNetwork,array)
})
// ou desacoplar o callback
const socialNetworks2 = ['youtube','twitter','ínstagram','facebook']
const logInfoArray = (socialNetwork,index,array) =>{
    console.log(index,socialNetwork,array)
    }
    socialNetworks2.forEach(logInfoArray)

// Resumindo: callback são funções que passamos como argumentos  
// da invocação de outras funções ou métodos 
