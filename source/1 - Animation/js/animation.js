/* eslint-disable no-console */
'use strict';
// animation.js

let circle = document.querySelector('.circle');
let forwardButton = document.querySelector('.forward-button');
let reverseButton = document.querySelector('.reverse-button');
let transitionForwardButton = document.querySelector('.transition-forward-button');
let transitionBackButton = document.querySelector('.transition-back-button');
const FORWARD_MOVE = 'forward-move';
const REVERSE_MOVE = 'reverse-move';
const TRANSITION_FORWARD = 'transition-forward';
const TRANSITION_BACK = 'transition-back';

function initCircleForwardMoving() {
  if (forwardButton) {
    forwardButton.addEventListener('click', circleForwardMoveClickHandler);
    reverseButton.addEventListener('click', circleReversedMoveClickHandler);
    transitionForwardButton.addEventListener('click', circleTransitionForwardClickHandler);
    transitionBackButton.addEventListener('click', circleTransitionBackClickHandler);
  }
}

function circleTransitionForwardClickHandler() {
  circle.classList.add(TRANSITION_FORWARD);
  circle.classList.remove(FORWARD_MOVE);
  circle.classList.remove(REVERSE_MOVE);
  circle.classList.remove(TRANSITION_BACK);
}

function circleTransitionBackClickHandler() {
  circle.classList.add(TRANSITION_BACK);
  circle.classList.remove(TRANSITION_FORWARD);
  circle.classList.remove(FORWARD_MOVE);
  circle.classList.remove(REVERSE_MOVE);
}

function circleForwardMoveClickHandler() {
  if (circle) {
    circle.classList.add(FORWARD_MOVE);
    circle.classList.remove(REVERSE_MOVE);
    circle.classList.remove(TRANSITION_FORWARD);
    circle.classList.remove(TRANSITION_BACK);
  }
}

function circleReversedMoveClickHandler() {
  if (circle) {
    circle.classList.add(REVERSE_MOVE);
    circle.classList.remove(FORWARD_MOVE);
    circle.classList.remove(TRANSITION_FORWARD);
    circle.classList.remove(TRANSITION_BACK);
  }
}

initCircleForwardMoving();
