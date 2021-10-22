burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rnav = document.querySelector('.rnav')


burger.addEventListener('click',()=>{
    navlist.classList.toggle('opacity')
    rnav.classList.toggle('opacity')
    navbar.classList.toggle('navheight')
})