
const forgot = document.querySelector('.js-model-help')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showForgot(){
    modal.classList.add('open')
    model.classList.remove('open')
}
function hideForgot(){
    modal.classList.remove('open')
}

forgot.addEventListener('click',showForgot)
modal.addEventListener('click',hideForgot)
modalClose.addEventListener('click',hideForgot)
modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})