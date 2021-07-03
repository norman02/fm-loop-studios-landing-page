const header = document.querySelector('.header')
const burger = document.querySelector('.burger')

const toggle = () => header.classList.toggle('change')

burger.addEventListener('click', toggle)