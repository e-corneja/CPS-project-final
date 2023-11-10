const modalBlock = document.querySelector('.modal')
const callBtn = document.querySelectorAll('.call-btn')
const feedBackBtn = document.querySelectorAll('.feedback-btn')
const modalClose = document.querySelector('.close-modal')
const formCall = document.querySelector('.modal__form--call')
const formFeedBack = document.querySelector('.modal__form--feedback')

callBtn.forEach(function (el) {
  el.addEventListener('click', function () {
    modalBlock.classList.toggle('modal-active')
    formCall.style.display = 'block'
    formFeedBack.style.display = 'none'
    document.body.classList.toggle('stop-scroll')
  })
})

feedBackBtn.forEach(function (el) {
  el.addEventListener('click', function () {
    modalBlock.classList.toggle('modal-active')
    formCall.style.display = 'none'
    formFeedBack.style.display = 'block'
    document.body.classList.toggle('stop-scroll')
  })
})

modalClose.addEventListener('click', function () {
  modalBlock.classList.toggle('modal-active')
  document.body.classList.toggle('stop-scroll')
})
