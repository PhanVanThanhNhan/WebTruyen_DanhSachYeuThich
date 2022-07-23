const login = document.querySelector('.js-login')
const model = document.querySelector('.js-model')
const modelClose = document.querySelector('.js-model-close')
const modelContainer = document.querySelector('.js-model-container')
const modelRegister = document.querySelector('.js-modal-register-help')

function showLogin(){
    model.classList.add('open')
}
function hideLogin(){
    model.classList.remove('open')
}
function showLoginInRegister(){
    model.classList.add('open')
    modalRegister.classList.remove('open')
}
login.addEventListener('click',showLogin)
modelRegister.addEventListener('click',showLoginInRegister)
modelClose.addEventListener('click',hideLogin)
model.addEventListener('click',hideLogin)
modelContainer.addEventListener('click',function(event){
    event.stopPropagation()
})




