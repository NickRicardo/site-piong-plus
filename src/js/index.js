
//MENU INVISÍVEL E FIXO QUANDO SCROLA
// document.addEventListener('DOMContentLoaded', function () {
//     const menu = document.querySelector('.menu');
//     let menuVisible = false;

//     window.addEventListener('scroll', function () {
//         if (window.scrollY > 70 && !menuVisible) {
//             menu.style.top = '0';
//             menuVisible = true;
//         } else if (window.scrollY <= 70 && menuVisible) {
//             menu.style.top = '-70px';
//             menuVisible = false;
//         }
//     });
// });

// INTERAÇÃO DE MOVIMENTAÇÃO DA SECTION VINDO DA ESQUERDA
var lastOne = document.querySelector('.last-one')
var myObserver = new IntersectionObserver( (entries)=> {
    entries.forEach( (entry) => {
        if(entry.isIntersecting === true) {
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

var elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))

// INTERAÇÃO DE MOVIMENTAÇÃO DA SECTION VINDO DA DIREITA
var lastOne = document.querySelector('.last-one')
var myObserver = new IntersectionObserver( (entries)=> {
    entries.forEach( (entry) => {
        if(entry.isIntersecting === true) {
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

var elements = document.querySelectorAll('.hidden-right')

elements.forEach((element) => myObserver.observe(element))