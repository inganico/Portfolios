
const tabButtons = document.querySelectorAll('.button__btn');
const tabsItems = document.querySelectorAll('.portfolio__list')


tabButtons.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab')
    let currentTub = document.querySelector(tabId)

    if (!currentBtn.classList.contains('button__btn_active')) {
      tabButtons.forEach(function (item) {
        item.classList.remove('button__btn_active')
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('portfolio__list_active')
      });

      currentBtn.classList.add('button__btn_active')
      currentTub.classList.add('portfolio__list_active')
    }
  });
}

document.querySelector('.button__btn').click()

