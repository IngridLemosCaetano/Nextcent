let botao = document.getElementById('menu-toggle')
let menu_mobile = document.getElementById('menu-mobile')

botao.addEventListener('click', function(){
    botao.classList.toggle('active')
    menu_mobile.classList.toggle('show')
})

// let botao = document.getElementById('menu-toggle')
// let menuMobile = document.getElementById('menu-mobile')


// botao.addEventListener('click',function(){
//     menuMobile.classList.toggle('show')
//     botao.classList.toggle('active')
// })