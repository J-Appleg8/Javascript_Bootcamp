/////////////////////////
//// Modal Window //////
///////////////////////

"use strict";

////////////////////////////////////////////////////////////////////////////////
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// querySelectorAll returns back a nodeList
const btnOpenModal = document.querySelectorAll(".show-modal");

////////////////////////////////////////////////////////////////////////////////
// Show Modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

////////////////////////////////////////////////////////////////////////////////
// Close Modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

////////////////////////////////////////////////////////////////////////////////
// Picking up Esc key on keyboard
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
