const burgerOpen = document.querySelector('.burger');
const menuBurger = document.querySelector('.header')


burgerOpen.addEventListener('click', function () {
  menuBurger.classList.toggle('opens');
})

let html = document.querySelector("html")
document.querySelector(".burger").onclick = function(){
html.classList.toggle("unscroll")
}
