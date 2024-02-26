var msgCookies = document.querySelector('.cookies-msg');

function aceito(){
    localStorage.lgpd = 'sim'
    msgCookies.classList.remove('mostrarCookie')
}

if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrarCookie')
}else{
    msgCookies.classList.add('mostrarCookie')
}