$(function() {
    $(".menu a, .logo").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
        menuBtn.classList.remove('is-active');
	});
    
    $('.slider').slick({
        dots: true,
        arrows: false,
    });

    $('.menu__btn, .menu a').on('click',function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    var mixer = mixitup('.gallery__filter');

    const menuBtn = document.querySelector('.menu__btn');
    menuBtn.addEventListener('click', function(){
        this.classList.contains("is-active") === true ? this.classList.remove("is-active") : this.classList.add("is-active");   
     })
});

