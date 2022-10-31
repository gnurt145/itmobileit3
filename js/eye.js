const eyeOn = document.querySelector('.js-eye')
const password = document.querySelector('.js-password')

function showeyeOn() {
    if (password.type === "password") {
        eyeOn.classList.remove('fa-eye')
        eyeOn.classList.add('fa-eye-slash')
        password.type = "text"
    } else {
        eyeOn.classList.add('fa-eye')
        eyeOn.classList.remove('fa-eye-slash')
        password.type = "password"
    }
}

eyeOn.addEventListener('click', showeyeOn)