
console.log("ready!");

// mobile menu toggle
const burger = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__menu");

burger.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.toggle('header__menu--active');
  menu.classList.toggle('header__menu--hidden');

  burger.classList.toggle('button-active');
});

//form
const form = document.querySelector(".form");
const formContainer = form.querySelector(".form__container");
const body = document.querySelector('body');

const showMessage = () => {
  form.classList.add("form--sended");
};


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
    form.classList.remove('form--active', 'form--sended');
  }, 500)
};


//form validation

const setMessage = (field) => {
  return field.validity.patternMismatch ? 'Pleace enter correct data' : 'Should be not empty'
};


const checkValid = (field) => {
  const isValid = field.checkValidity();
  const errorField = field.nextElementSibling;

  if (isValid) {
    field.classList.remove('form__input--invalid');
    errorField.style.display = "none";
  } else {
    field.classList.add('form__input--invalid');
    errorField.style.display = 'block';
    errorField.textContent = setMessage(field);
  };

  // console.log(isValid);

  return isValid;
};

formContainer.addEventListener('submit', function(evt) {
  evt.preventDefault();

  const fields = Array.from(formContainer.querySelectorAll('.form__input'));
  const isValid = !fields.map(checkValid).includes(false);

  if (isValid) {
    showMessage();
  }
});

form.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closeForm();
  }
});


//imports
@include("slider.js");
