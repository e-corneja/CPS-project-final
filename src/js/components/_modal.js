const modalBlock = document.querySelector('.modal')
const callBtn = document.querySelectorAll('.call-btn')
const feedBackBtn = document.querySelectorAll('.feedback-btn')
const modalClose = document.querySelector('.close-modal')
const formCall = document.querySelector('.modal__form--call')
const formFeedBack = document.querySelector('.modal__form--feedback')
const burgerBlock = document.querySelector('.burger')

callBtn.forEach(function (el) {
  el.addEventListener('click', function () {
    modalBlock.classList.toggle('modal-active')
    formCall.style.display = 'block'
    formFeedBack.style.display = 'none'
    if (!document.body.classList.contains('stop-scroll')) {
      document.body.classList.add('stop-scroll')
    }
  })
})

feedBackBtn.forEach(function (el) {
  el.addEventListener('click', function () {
    modalBlock.classList.toggle('modal-active')
    formCall.style.display = 'none'
    formFeedBack.style.display = 'block'
    if (!document.body.classList.contains('stop-scroll')) {
      document.body.classList.add('stop-scroll')
    }
  })
})

modalClose.addEventListener('click', function () {
  modalBlock.classList.toggle('modal-active')
  if (document.body.classList.contains('stop-scroll')) {
    document.body.classList.remove('stop-scroll')
  }
  if (burgerBlock.classList.contains('burger-active')) {
    document.body.classList.add('stop-scroll')
  }
})

document.addEventListener('click', function (e) {
  let target = e.target
  if (target == modalBlock) {
    modalBlock.classList.remove('modal-active')
    if (document.body.classList.contains('stop-scroll')) {
      document.body.classList.remove('stop-scroll')
    }
    if (burgerBlock.classList.contains('burger-active')) {
      document.body.classList.add('stop-scroll')
    }
  }
})
