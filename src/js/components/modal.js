const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnBlue = document.querySelectorAll(".modal-btn-blue");
const modal = document.querySelectorAll(".modal");
const modalRecall = document.querySelector(".modal--recall");
const modalData = document.querySelector(".modal--blue");

if (modalBtn.length > 0) {
  modalBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modalRecall.classList.add("active");
    });
  });
}
if (modalBtnBlue.length > 0) {
  modalBtnBlue.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modalData.classList.add("active");
    });
  });
}

if (modal.length > 0) {
  modal.forEach((m) => {
    const modalClose = m.querySelector(".modal__close");
    const modalBody = m.querySelector(".modal__body");

    modalClose.addEventListener("click", (e) => {
      e.preventDefault();
      m.classList.remove("active");
    });
    m.addEventListener("click", (e) => {
      e.preventDefault();
      m.classList.remove("active");
    });
    modalBody.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
}
