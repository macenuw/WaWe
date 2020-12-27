$(function() {
    var mixer = mixitup('.gallery__filter');

    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
    });
});
