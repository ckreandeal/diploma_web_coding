$( document ).ready(function() {
    console.log( "ready!" );



 	$('.menu-mobile-button').on('click', function(event){
    	event.preventDefault()
    	$('body, html').toggleClass('scroll-fixed')
        $('.menu-nav').toggle()
        $('.menu-mobile-button').toggleClass('button-active')


    });


});
