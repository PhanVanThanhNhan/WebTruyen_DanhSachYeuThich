const register = document.querySelector('.js-register')
const modalRegister = document.querySelector('.js-modal-register')
const modalRegisterClose = document.querySelector('.js-modal-register-close')
const modalRegisterContainer = document.querySelector('.js-modal-register-container')

function showRegister(){
    modalRegister.classList.add('open')
}
function hideRegister(){
    modalRegister.classList.remove('open')
}

register.addEventListener('click',showRegister)
modalRegister.addEventListener('click',hideRegister)
modalRegisterClose.addEventListener('click',hideRegister)
modalRegisterContainer.addEventListener('click',function(event){
    event.stopPropagation()
})