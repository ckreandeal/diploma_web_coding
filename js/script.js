$( document ).ready(function() {
    console.log( "ready!" );



 	$('.header__toggle').on('click', function(event){
    	event.preventDefault()
    	$('body, html').toggleClass('scroll-fixed')
        $('.header__menu').toggle()
        $('.header__toggle').toggleClass('button-active')


    });



    const form = document.querySelector('.form');
    const formContainer = form.querySelector('.form__container');
    const formMessage = form.querySelector('.form__message');


    const showMessage = () => {
      form.classList.add('form--sended');
    }

    formContainer.addEventListener('submit', (evt) => {
      // отменяем отправку
      evt.preventDefault();

      showMessage();
    });


});

function openForm() {
  $('body').addClass('stop-scrolling')
  $("#myForm").fadeIn(300).css("display","flex");;
};

function closeForm() {
  $("#myForm").fadeOut(200);
  $('body').removeClass('stop-scrolling')
  $('.form').removeClass('form--sended')
};
