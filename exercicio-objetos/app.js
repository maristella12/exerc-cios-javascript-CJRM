
/*
Crie um objeto "cat" que possui algumas propriedades...
*/


//-01
const cat = {
name: 'Paulinho',
age: 4,
color: 'blue',
bestFriends : ['Harley','Jorge'],
sound:function(){
    return 'miauuu'
    }
}


//-02 Exiba a mensagem abaixo no console...
/*
console.log(`Áté aqui o objeto cat possui as seguintes propriedades e valores: ${cat.name}, ${cat.age}
    ${cat.color}, ${cat.bestFriends[1]}, ${cat.sound()}`)
    */

//-03 Adiciona 2 anos a idade do gato e exiba a idade atualizada no console
/*
cat.age += 2
console.log(cat.age)
*/
//-04 Crie uma função que adiciona um amigo(a) no array de amigos...
/*
const amigoNovo = function (friend){
  //tive que criar um parâmetro para adicionar o amigo
cat.bestFriends.push(friend)
}
//chama o parâmetro na const abaixo
amigoNovo('Robson')

console.log(cat.bestFriends)
*/ /*
//Outra forma de fazer passando um objeto por parâmetro !
const amigoNovo = (friend,object) => {
  //tive que criar um parâmetro para adicionar o amigo
object.bestFriends.push(friend)
}
//chama o parâmetro na const abaixo
amigoNovo('Robson',cat)
//Passando objeto por parâmetro
console.log(cat.bestFriends)
//invocando 
*/



// 05 - Crie uma função que adiciona mais uma cor à cor do gato;
//Utilize a sintaxe de colchetes para fazer isso ;
//Exiba a nova cor do gato no console, também utilizando a sintaxe de colchetes.


const changeColor = object =>{

  object['color'] += ' e branco '
 // Objeto color recebe a string acima
}
changeColor(cat)
//invocação da função
console.log(cat['color'])