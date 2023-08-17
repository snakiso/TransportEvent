let hamburger = document.querySelector('.hamburger');
let closeBtn = document.querySelector('.menu__close');
let menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.add('active')
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active')
})