const burgerOpen = document.querySelector('.burger');
const menuBurger = document.querySelector('.header')
const html = document.querySelector("html")
const navLink = document.querySelectorAll('.nav__link')


burgerOpen.addEventListener('click', function () {
  menuBurger.classList.toggle('opens');
  html.classList.add('unscroll')
})

navLink.forEach(elem => {

  elem.addEventListener('click', () => {
    if (true) {
      html.classList.remove('unscroll')
      menuBurger.classList.remove('opens');
    }
  })
})




