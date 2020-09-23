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

//ヘッダーロゴの位置変更
$(function () {
    function changeheader() {
        $('.headerch').each(function () {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowWidth = $(window).width();
            //ターゲットまでスクロール、画面幅がスマホではない場合のみ動作
            if ((scroll > target ) && (windowWidth > 768)) {
                $('.englishname').css('position', 'static');
                $('.englishname').css('transform', 'translate(0, 0)');
                $('.englishname').css('-webkit-transform', 'translate(0, 0)');
                $('.englishname').css('-ms-transform', 'translate(0, 0)');
                $('.japanesename').css('position', 'static');
                $('.japanesename').css('transform', 'translate(0, 0)');
                $('.japanesename').css('-webkit-transform', 'translate(0, 0)');
                $('.japanesename').css('-ms-transform', 'translate(0, 0)');
            }else if ((scroll < target) || (windowWidth > 768)) {
                $('.englishname').css('position', 'absolute');
                $('.englishname').css('transform', 'translate(-50%, -50%)');
                $('.englishname').css('-webkit-transform', 'translate(-50%, -50%)');
                $('.englishname').css('-ms-transform', 'translate(-50%, -50%)');
                $('.japanesename').css('position', 'absolute');
                $('.japanesename').css('transform', 'translate(-50%, -50%)');
                $('.japanesename').css('-webkit-transform', 'translate(-50%, -50%)');
                $('.japanesename').css('-ms-transform', 'translate(-50%, -50%)');
            }
        });
    }
    changeheader();
    $(window).scroll(function () {
        changeheader();
    });
});