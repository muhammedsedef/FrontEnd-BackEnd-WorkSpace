let userFormDOM = document.querySelector('#userForm')

userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')
const alertFunction = (title, message, type='warning') => 
    `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${title}</strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `   
function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#userName')
    const SCORE = document.querySelector('#score')
    if(USER_NAME.value && SCORE.value ) {
        console.log('MERHABA')
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
    }else{
        alertDOM.innerHTML = alertFunction(
            'Başlık Bilgisi', 
            'Eksik Bilgi Girdiniz!', 
            'danger'
        )
    }
}

let userListForm = document.querySelector('#userListForm')

function addItem (userName, score) {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill"> ${score} </span>`
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListForm.append(liDOM)
}



