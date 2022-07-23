//Đăng ký

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



//Quên mật khẩu

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



//Login

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




//Thay đổi thông tin

const changeUser = document.querySelector('.js-user-change')
const modalUserChange = document.querySelector('.js-modal-change')
const modalUserChangeClose = document.querySelector('.js-modal-change-close')
const modalUserChangeContainer = document.querySelector('.js-modal-change-container')

function showUserChange(){
    modalUserChange.classList.add('open')
}
function hideUserChange(){
    modalUserChange.classList.remove('open')
}
changeUser.addEventListener('click',showUserChange)
modalUserChangeClose.addEventListener('click',hideUserChange)
modalUserChange.addEventListener('click',hideUserChange)
modalUserChangeContainer.addEventListener('click',function(event){
    event.stopPropagation()
})




//Đăng nhập thành công

const loginSuccess = document.querySelector('.js-modal-login-btn')
const a = document.querySelector('.js-user')
const b = document.querySelector('.js-logout')

function userLogin(){
    register.style.display = 'none';
    login.style.display = 'none';
    hideLogin();
    a.style.display = 'block';
    b.style.display = 'block';

}

loginSuccess.addEventListener('click',userLogin)



//Đăng xuất

const modalLogoutAlert = document.querySelector('.js-modal-alert')
const modalLogoutAlertClose = document.querySelector('.js-alert-close')
const modalLogoutAlertContainer = document.querySelector('.js-alert-container')

function userLogout(){
    modalLogoutAlert.classList.add('open')
}
function hideLogoutAlert() {
    modalLogoutAlert.classList.remove('open')

}
function logout(){
    a.style.display = 'none';
    b.style.display = 'none';

    register.style.display = 'block';
    login.style.display = 'block';   
    hideLogoutAlert()
}




b.addEventListener('click',userLogout)
modalLogoutAlertClose.addEventListener('click',hideLogoutAlert)
modalLogoutAlert.addEventListener('click',hideLogoutAlert)
modalLogoutAlertContainer.addEventListener('click',function(event){
    event.stopPropagation()
})
document.querySelector('.js-modal-alert-btn').addEventListener('click',logout)



//Đổi mật khẩu

const changeUserPass = document.querySelector('.js-modal-change-help')
const modalUserChangePass = document.querySelector('.js-modal-change-pass')
const modalUserChangePassClose = document.querySelector('.js-modal-change-pass-close')
const modalUserChangePassContainer = document.querySelector('.js-modal-change-pass-container')

function showUserChangePass(){
    modalUserChangePass.classList.add('open')
    hideUserChange()
}
function hideUserChangePass(){
    modalUserChangePass.classList.remove('open')
}
changeUserPass.addEventListener('click',showUserChangePass)
modalUserChangePassClose.addEventListener('click',hideUserChangePass)
modalUserChangePass.addEventListener('click',hideUserChangePass)
modalUserChangePassContainer.addEventListener('click',function(event){
    event.stopPropagation()
})




//Search

const other = document.querySelector('.js-other')
const topSearch = document.querySelector('.js-top_search')

function showTopSearch(){
    topSearch.style.display = 'block';
}

other.addEventListener('click',showTopSearch)




//NavMenu

const bottom = document.querySelector('.js-bottom')
const navMenu = document.querySelector('.js-nav-menu')
const bottomHeight = bottom.clientHeight

navMenu.addEventListener('click',function(){
    var isClose = bottom.clientHeight === bottomHeight;
    if(isClose){
        bottom.style.height = 'auto';
        bottom.style.overflow = 'visible';
    } else 
    {
        bottom.style.overflow = 'hidden';
        bottom.style.height = '52px';
    }
})





const bookTags1 = document.querySelector('.js-book_tags1')
const bookTags2 = document.querySelector('.js-book_tags2')
const megaMenu1 = document.querySelector('.js-mega_menu1')
const megaMenu2 = document.querySelector('.js-mega_menu2')

megaMenu1.addEventListener('click',function(){
    var isOpen = megaMenu1.classList.contains("open")
    if(isOpen){
        bookTags1.classList.remove('expanded')
        megaMenu1.classList.remove('open')
    } else {
        bookTags1.classList.add('expanded')
        megaMenu1.classList.add('open')
    }
    
})

megaMenu2.addEventListener('click',function(){
    var isOpen = megaMenu2.classList.contains("open")
    if(isOpen){
        bookTags2.classList.remove('expanded')
        megaMenu2.classList.remove('open')
    } else {
        bookTags2.classList.add('expanded')
        megaMenu2.classList.add('open')
    }
    
})




//Scroll

const left = document.querySelector('.js-left')
const right = document.querySelector('.js-right')
const scroll = document.querySelector('.js-list-grid')
setTimeout(scrollAuto,5000)

function scrollAuto(){
    switch(scroll.style.marginLeft)
    {
        case '-10px':
        {
            scroll.style.marginLeft = '-120px';
            break;
        }
        case '-120px':
        {
            scroll.style.marginLeft = '-310px';
            break;
        }
        case '-310px':
        {
            scroll.style.marginLeft = '-500px';
            break;
        }
        case '-500px':
        {
            scroll.style.marginLeft = '-690px';
            break;
        }
        case '-690px':
        {
            scroll.style.marginLeft = '-10px';
            break;
        }
        default : break;
    }
    setTimeout(scrollAuto,5000)
}

function scrollRight(){
    switch(scroll.style.marginLeft)
    {
        case '-10px':
        {
            scroll.style.marginLeft = '-120px';
            break;
        }
        case '-120px':
        {
            scroll.style.marginLeft = '-310px';
            break;
        }
        case '-310px':
        {
            scroll.style.marginLeft = '-500px';
            break;
        }
        case '-500px':
        {
            scroll.style.marginLeft = '-690px';
            break;
        }
        case '-690px':
        {
            scroll.style.marginLeft = '-10px';
            break;
        }
        default : break;
    }

}

function scrollLeft(){
    switch(scroll.style.marginLeft)
    {
        case '-120px':
        {
            scroll.style.marginLeft = '-10px';
            break;
        }
        case '-310px':
        {
            scroll.style.marginLeft = '-120px';
            break;
        }
        case '-500px':
        {
            scroll.style.marginLeft = '-310px';
            break;
        }
        case '-690px':
        {
            scroll.style.marginLeft = '-500px';
            break;
        }
        default : break;
    }
}

left.addEventListener('click',scrollLeft)
right.addEventListener('click',scrollRight)




//slide

let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


