/* eslint-disable no-console */
'use strict';

let body = document.body;
let authorButton = document.querySelector('.main-nav__button');
let closeButton = document.querySelector('.modal__close');
let modal = document.querySelector('.modal');

const SCROLL_PREVENTION = 'js-body-scroll-prevention';
const MODAL_OPENED = 'js-modal-opened';

function initModal() {
  if (authorButton) {
    authorButton.addEventListener('click', authorButtonClickHandler);
  }
}

function authorButtonClickHandler() {
  openModal();
}

function openModal() {
  if (body) {
    body.classList.add(SCROLL_PREVENTION);
  }
  if (modal) {
    modal.classList.add(MODAL_OPENED);
  }
  // подключаем обработчик нажатия на кнопку close (X)
  closeButton.addEventListener('click', closeHandler);
  // подключаем обработчик 'escape'
  window.addEventListener('keydown', escapeHandler);
  // подключаем обработчик клика по overlay
  document.addEventListener('click', overlayClickHandler);
}

function closeModal() {
  if (body.classList.contains(SCROLL_PREVENTION)) {
    body.classList.remove(SCROLL_PREVENTION);
  }
  if (modal.classList.contains(MODAL_OPENED)) {
    modal.classList.remove(MODAL_OPENED);
  }
  // отключаем обработчик нажатия на кнопку close (X)
  closeButton.removeEventListener('click', closeHandler);

  // отключаем обработчик клика по overlay
  document.removeEventListener('click', overlayClickHandler);

  // отключаем обработчик 'escape'
  window.removeEventListener('keydown', escapeHandler);
}

// обработчики close (X)
function closeHandler() {
  closeModal();
}

// обработчики escape
function escapeHandler(evt) {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

// обработчик клика по overlay-области
function overlayClickHandler(evt) {
  const isModalWin = evt.target;
  if (isModalWin === modal) {
    closeModal();
  }
}

initModal();
