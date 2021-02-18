$( document ).ready(function() {
    console.log( "ready!" );



 	$('.header__toggle').on('click', function(event){
    	event.preventDefault()
    	$('body, html').toggleClass('scroll-fixed')
        $('.header__menu').toggle()
        $('.header__toggle').toggleClass('button-active')


    });




});

function openForm() {
  $('body').addClass('stop-scrolling')
  $("#myForm").fadeIn(300).css("display","flex");;
}

function closeForm() {
  $('body').removeClass('stop-scrolling')
  $("#myForm").fadeOut(200);
}
