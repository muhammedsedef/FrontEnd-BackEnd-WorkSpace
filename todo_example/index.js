let taskDOM = document.querySelector('#task')
let listDOM = document.querySelector('#list')
let nodeList = document.getElementsByTagName('li')

for (let i = 0; i < nodeList.length; i++) {
    var span = document.createElement('span')
    span.innerHTML = 'x'
    span.className = 'close'
    nodeList[i].appendChild(span)
}

removeTask()


function newElement() {
    if (taskDOM.value !== "" && taskDOM.value.trim().length !== 0) {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = taskDOM.value
        listDOM.appendChild(liDOM)
        let success = $('.success')
        success.toast('show')

        var span = document.createElement('span')
        span.innerHTML = 'x'
        span.className = 'close'
        liDOM.appendChild(span)

        removeTask()
        saveToLocalStorage()

    } else {
        let error = $('.error')
        error.toast('show')
    }
}

function removeTask() {
    var close = document.getElementsByClassName('close')
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function () {
            this.parentElement.style.display = 'none'
        })
    }
}

listDOM.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked')
    }
})



