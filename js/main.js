const burger = document.querySelector('.burger')
const closed = document.querySelector('.close')
const menu = document.querySelector('.menu')

burger.addEventListener('click', ()=>{
    menu.classList.toggle('active')
})

closed.addEventListener('click', ()=> {
    menu.classList.toggle('active')
})
