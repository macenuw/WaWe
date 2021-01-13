$(function() {
    $(".menu a, .logo").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
    
    $('.slider').slick({
        dots: true,
        arrows: false,
    });

    $('.menu__btn, .menu a').on('click',function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    var mixer = mixitup('.gallery__filter');
});
