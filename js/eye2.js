const eyeOn2 = document.querySelector('.js-eye2')
const password2 = document.querySelector('.js-password2')
const eyeOn3 = document.querySelector('.js-eye3')
const password3 = document.querySelector('.js-password3')

function showeyeOn() {
    if (password2.type === "password") {
        eyeOn2.classList.remove('fa-eye')
        eyeOn2.classList.add('fa-eye-slash')
        password2.type = "text"
    } else {
        eyeOn2.classList.add('fa-eye')
        eyeOn2.classList.remove('fa-eye-slash')
        password2.type = "password"
    }
}

function showeyeOn3() {
    if (password3.type === "password") {
        eyeOn3.classList.remove('fa-eye')
        eyeOn3.classList.add('fa-eye-slash')
        password3.type = "text"
    } else {
        eyeOn3.classList.add('fa-eye')
        eyeOn3.classList.remove('fa-eye-slash')
        password3.type = "password"
    }
}

eyeOn2.addEventListener('click', showeyeOn)
eyeOn3.addEventListener('click', showeyeOn3)
eyeOn2.addEventListener('click', showeyeOn3)
eyeOn3.addEventListener('click', showeyeOn)