const form = document.querySelector('.signup-form')
const userNameInput = document.querySelector('#username')


form.addEventListener('submit' , event => {

    event.preventDefault()

    //console.log(userNameInput.value)
    //console.log(form.username.value)
    console.log(event.target.username.value)
})

const username = 'rogermm1'  
const pattern = /^[a-z]{6,}$/       
//const isAMatch = pattern.test(username)
/*
if(isAMatch) {
    console.log('O teste da regex passou =)')
}else {
        console.log('o teste da regex não passou')
     }

*/

const result = username.search(pattern)
console.log(result)
