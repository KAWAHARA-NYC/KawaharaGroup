$(function () {
    $('.thumb-item').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.thumb-item-nav'
    });
    $('.thumb-item-nav').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 400,
        arrows: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.thumb-item',
        focusOnSelect: true,
        prevArrow: '<i class="fas fa-chevron-left slide-arrow prev-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slide-arrow next-arrow"></i>'
    });
});
