const modal = document.querySelector('.js-modal')
const modal2 = document.querySelector('.js-modal2')
const closeModal = document.querySelector('.js-modal-close')
const closeModal2 = document.querySelector('.js-modal-close2')
const modalcontainer = document.querySelector('.js-modal-container')
const modalcontainer2 = document.querySelector('.js-modal-container2')
const Btnsignin = document.querySelector('.js-sign-in')
const BtnFpass = document.querySelector('.js-forgot-password')
const Btngoto = document.querySelector('.js-go-to-register')
const BtnBack = document.querySelector('.js-modal-back-to-sign-in')

// them
const navclose = document.querySelector('.js-nav-mobile')
const Btn = document.querySelector('.js-btn-add')
const modal_add = document.querySelector('.js-modal-add')
const overhide = document.querySelector('.nav-overlay')
const openmenu = document.querySelector('.js-bx-menu')

function closenavbar() {
    navclose.classList.add('close')
    navclose.classList.remove('open')
    modal_add.classList.add('open')
    modal_add.classList.remove('close')
}

function opennavbar() {
    navclose.classList.add('open')
}
// end

function showModal() {
    modal.classList.add('open')
    modal.classList.remove('close')
}

function closeAll() {
    modal.classList.remove('open')
    modal.classList.add('close')
    modal2.classList.remove('open')
    modal2.classList.add('close')
    
    // them
    navclose.classList.remove('close')
}

Btnsignin.addEventListener('click', showModal)
closeModal.addEventListener('click', closeAll)
closeModal2.addEventListener('click', closeAll)
modal.addEventListener('click', closeAll)
modal2.addEventListener('click', closeAll)

BtnFpass.addEventListener('click', function(){
    modal.classList.remove('open')
    modal.classList.add('close')
    modal2.classList.add('open')
    modal2.classList.remove('close')
})

Btngoto.addEventListener('click', function () {
    modal.classList.remove('open')
    modal.classList.add('close')
})

BtnBack.addEventListener('click', function(){
    modal2.classList.remove('open')
    modal2.classList.add('close')
    modal.classList.remove('close')
    modal.classList.add('open')
})

modalcontainer.addEventListener('click', function (even) {
    even.stopPropagation()
})

modalcontainer2.addEventListener('click', function (even) {
    even.stopPropagation()
})

//them
Btn.addEventListener('click', closenavbar)
openmenu.addEventListener('click', opennavbar)