$(function () {
    $('.thumb-item').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight:true,
        fade: true,
        asNavFor: '.thumb-item-nav',
        prevArrow: '<i class="fas fa-chevron-left slide-arrow prev-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slide-arrow next-arrow"></i>'
    });
    $('.thumb-item-nav').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 400,
        arrows: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.thumb-item',
        focusOnSelect: true
    });
});
