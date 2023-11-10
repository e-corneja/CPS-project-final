////////////////////  SHOW MORE BTN ////////////////////////
const showBtns = document.querySelectorAll('.show__btn')

for (let i = 0; i < showBtns.length; i++) {
  const showBtn = showBtns[i]
  const container =
    showBtn.previousElementSibling.querySelector('.swiper-wrapper')
  const icon = showBtn.querySelector('.icon-expand-two')
  const btnText = showBtn.querySelector('.btn-text')

  showBtn.addEventListener('click', function () {
    container.classList.toggle('swiper-wrapper--opened')
    if (container.classList.contains('swiper-wrapper--opened')) {
      icon.style.transform = 'rotate(180deg)'
      btnText.textContent = 'Скрыть'
    }
    if (!container.classList.contains('swiper-wrapper--opened')) {
      icon.style.transform = 'rotate(0deg)'
      btnText.textContent = 'Показать все'
    }
  })
}
