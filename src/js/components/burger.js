const burgerOpen = document.querySelector('.burger');
const menuBurger = document.querySelector('.header')


burgerOpen.addEventListener('click', function () {
  menuBurger.classList.toggle('opens');
})


