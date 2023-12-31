const burgerOpenBtn = document.querySelector('.header__btn')
const burgerBlock = document.querySelector('.burger')
const burgerCloseBtn = document.querySelector('.close-btn')

burgerOpenBtn.addEventListener('click', function () {
  burgerBlock.classList.toggle('burger-active')
  if (!document.body.classList.contains('stop-scroll')) {
    document.body.classList.add('stop-scroll')
  }
})

burgerCloseBtn.addEventListener('click', function () {
  burgerBlock.classList.toggle('burger-active')
  document.body.classList.remove('stop-scroll')
})

window.document.addEventListener('click', function (e) {
  let target = e.target
  if (target == burgerBlock) {
    burgerBlock.classList.remove('burger-active')
    document.body.classList.remove('stop-scroll')
  }
})
