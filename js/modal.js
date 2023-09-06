const modalContent = document.querySelector('.modal-content');

const btn = document.getElementById('myBtn');

btn.onclick = function () {
  modalContent.classList.toggle('show-modal-content');
};
document.onclick = function (e) {
  if (e.target.closest('.link')) {
    modalContent.classList.remove('show-modal-content');
  }
};
