// Show Modal
const openModalButton = document.getElementById("open-modal");
const modalWindowOverlay = document.getElementById("modal-overlay");
const body = document.querySelector("body");

const showModalWindow = () => {
  window.scrollTo(0, 0);
  modalWindowOverlay.style.display = 'flex';
  body.style.overflow = "hidden"
}
openModalButton.addEventListener("click", showModalWindow);

// Hide Modal
const closeModalButton = document.getElementById("close-modal");

const hideModalWindow = () => {
    modalWindowOverlay.style.display = 'none';
    body.style.overflow = "auto";
};

closeModalButton.addEventListener("click", hideModalWindow);


// Hide On Blur
const modalWindowBackground = document.getElementById("modal-background");

const hideModalWindowOnBlur = (e) => {

    if(e.target === e.currentTarget) {
      console.log(e.target === e.currentTarget)
        hideModalWindow();
    }
}

modalWindowBackground.addEventListener("click", hideModalWindowOnBlur)
