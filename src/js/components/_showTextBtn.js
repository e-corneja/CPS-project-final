const showBtn = document.querySelector('.expand__btn')
const container = document.querySelector('.descr')
const icon = document.querySelector('.icon-expand')
const btnText = document.querySelector('.text-btn')

showBtn.addEventListener('click', function () {
  container.classList.toggle('hidden')

  if (container.classList.contains('hidden')) {
    icon.style.transform = 'rotate(180deg)'
    btnText.textContent = 'Скрыть'
  } else {
    icon.style.transform = 'rotate(0deg)'
    btnText.textContent = 'Читать далее'
  }
})
