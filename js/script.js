
console.log("ready!");

const burger = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__menu");

burger.addEventListener('click', function (event) {
  event.preventDefault();
  if (menu.classList.contains('header__menu--active')) {
    menu.classList.remove('header__menu--active');
    menu.classList.add('header__menu--hidden');
  } else {
    menu.classList.remove('header__menu--hidden');
    menu.classList.add('header__menu--active');
  }
  burger.classList.toggle('button-active');
});

const form = document.querySelector(".form");
const formContainer = form.querySelector(".form__container");
const formMessage = form.querySelector(".form__message");
const body = document.querySelector('body');

const showMessage = () => {
  form.classList.add("form--sended");
};

formContainer.addEventListener("submit", (evt) => {
  evt.preventDefault();
  showMessage();
});

function openForm() {
  body.classList.add("stop-scrolling");
  fadeIn(form);
};

function closeForm() {
  body.classList.remove("stop-scrolling");
  fadeOut(form);
};


function fadeIn(element) {
  let opacity = 0;
  let intervalID = setInterval(function() {

      if (opacity < 1) {
          opacity = opacity + 0.1
          element.style.opacity = opacity;
      } else {
          clearInterval(intervalID);
      }
      form.classList.remove('form--hidden');
      form.classList.add('form--active');
  }, 50);
};

function fadeOut(element) {
  var opacity = 1;
  var intervalID = setInterval(function() {

      if (opacity > 0) {
          opacity = opacity - 0.1
          element.style.opacity = opacity;
      } else {
          clearInterval(intervalID);
      }
      form.classList.remove('form--active');
      form.classList.add('form--hidden');
  }, 50);
};


@include("slider.js");
