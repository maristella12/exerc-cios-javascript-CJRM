const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
/*
form.addEventListener('submit' , event => {
    event.preventDefault()

 console.log(event.target.username.value)


 const username = event.target.username.value
 const usernameRegex = /^[a-zA-Z]{6,12}$/
 const isAMatch = usernameRegex.test(username)

 if(isAMatch){
 feedback.textContent = 'username válido =)'
 return
 }
    feedback.textContent = 'O username deve conter entre 6 a 12 caracteres e deve conter apenas letras !'
 })


*/

form.addEventListener('submit', event =>{
   event.preventDefault()

const username = event.target.username.value
const usernameRegex = /^[a-zA-z]{6,12}$/
const isAMatch = usernameRegex.test(username)

if (isAMatch){
    feedback.textContent = 'Usuário válido =) ! '
    return
} 

feedback.textContent =  ' O username deve  conter entre  6 a 12 caracteres e deve conter apenas letras! '
})