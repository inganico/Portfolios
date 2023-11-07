const openBtn = document.querySelectorAll('#button-open');
const openModal = document.getElementById('modal-open');
const closeModal = document.getElementById('modal__close-btn');


openBtn.forEach((item) => {
  item.addEventListener('click', function () {
    openModal.classList.add('open')
  })
})



closeModal.addEventListener('click', function () {
  openModal.classList.remove('open')
})

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    openModal.classList.remove('open')
  }
})

//document.querySelector("#modal-open .modal__box").addEventListener('click', function (e) {
//  e.isClickWithInModal = true;
//})

//openModal.addEventListener('click', function (e) {
//  e.currentTarget.classList.remove('open');
//})
