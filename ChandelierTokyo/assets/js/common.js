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
            if (scroll > target - windowHeight + 500) {
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
                $('.englishname p').css('position', 'static');
                $('.englishname p').css('transform', 'translate(0, 0)');
                $('.englishname p').css('-webkit-transform', 'translate(0, 0)');
                $('.englishname p').css('-ms-transform', 'translate(0, 0)');
                $('.japanesename p').css('position', 'static');
                $('.japanesename p').css('transform', 'translate(0, 0)');
                $('.japanesename p').css('-webkit-transform', 'translate(0, 0)');
                $('.japanesename p').css('-ms-transform', 'translate(0, 0)');
            }else if ((scroll < target) || (windowWidth > 768)) {
                $('.englishname p').css('position', 'absolute');
                $('.englishname p').css('transform', 'translate(-50%, -50%)');
                $('.englishname p').css('-webkit-transform', 'translate(-50%, -50%)');
                $('.englishname p').css('-ms-transform', 'translate(-50%, -50%)');
                $('.japanesename p').css('position', 'absolute');
                $('.japanesename p').css('transform', 'translate(-50%, -50%)');
                $('.japanesename p').css('-webkit-transform', 'translate(-50%, -50%)');
                $('.japanesename p').css('-ms-transform', 'translate(-50%, -50%)');
            }
        });
    }
    changeheader();
    $(window).scroll(function () {
        changeheader();
    });
});

$('.slick01').slick({
    autoplay: true, //自動再生
    dots: true, //ドットのナビゲーションを表示
    infinite: true, //スライドのループ有効化
    speed: 2500, //切り替えのスピード（小さくすると速くなる）
    autoplaySpeed: 2500, //自動再生のスピード
    fade: true, //フェードの有効化
});