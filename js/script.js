
console.log("ready!");

const burger = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__menu");

burger.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.toggle('header__menu--active');
  menu.classList.toggle('header__menu--hidden');

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
  form.classList.add('form--active');

	setTimeout(() => {
  	form.classList.add('form--fadeIn');
  }, 1)
};

function closeForm() {
  body.classList.remove("stop-scrolling");
  form.classList.remove('form--fadeIn');

	setTimeout(() => {
  	form.classList.remove('form--active');
  }, 500)
};


@include("slider.js");
