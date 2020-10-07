$(function () {
    function animation() {
        $('.fadeInUp').each(function () {
            //ターゲットの位置を取得
            var target = $(this).offset().top;
            //スクロール量を取得
            var scroll = $(window).scrollTop();
            //ウィンドウの高さを取得
            var windowHeight = $(window).height();
            //ターゲットまでスクロールするとフェードインする
            if (scroll > target - windowHeight + 300) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
    });
});

$('.nav_toggle').on('click', function () {
    $('.nav_toggle, .global_navi_wrapper').toggleClass('show');
    $('.global_navi_wrapper').toggleClass('is-hidden');
});

