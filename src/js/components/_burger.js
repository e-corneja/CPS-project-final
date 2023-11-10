const burgerOpenBtn = document.querySelector('.header__btn')
const burgerBlock = document.querySelector('.burger')
const burgerCloseBtn = document.querySelector('.close-btn')

burgerOpenBtn.addEventListener('click', function () {
  burgerBlock.classList.toggle('burger-active')
  document.body.classList.add('stop-scroll')
})

burgerCloseBtn.addEventListener('click', function () {
  burgerBlock.classList.toggle('burger-active')
  document.body.classList.remove('stop-scroll')
})
