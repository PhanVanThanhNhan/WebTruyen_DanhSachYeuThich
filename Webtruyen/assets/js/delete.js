
const del = document.querySelector('.js-delete')
const modalConfirm = document.querySelector('.js-modal-delete')
const modalConfirmContainer = document.querySelector('.js-confirm-modal-container')
const modalConfirmClose = document.querySelector('.js-confirm-modal-close')
        
        
function showConfirm(){
    modalConfirm.classList.add('open')
}
        
        
function hideConfirm(){
    modalConfirm.classList.remove('open')
}    

del.addEventListener('click', showConfirm)
  
modalConfirmClose.addEventListener('click',hideConfirm)
modalConfirm.addEventListener('click',hideConfirm)
modalConfirmContainer.addEventListener('click', function(event){
    event.stopPropagation()
})