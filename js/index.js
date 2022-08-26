$(function() {
    $('.slider_panel').append($('.slider_image').first().clone());
    $('.slider_panel').prepend($('.slider_image').eq(-2).clone());
    $('.slider_panel').css('left', -1930);
    var index = 1;
    var auto;
    moveSlider(index);
    autoSlider(auto);
    $('.left_control').click(function() {
        if(index > 1) {
            index--;
            moveSlider(index);
        } else {
            $('.slider_panel').css('left', -15440);
            index=7;
            moveSlider(index);
        }
        $('.slider_panel').clearQueue();
    });
    $('.right_control').click(function() {
        if(index < 7) {
            index++;
            moveSlider(index)
        } else {
            $('.slider_panel').css('left', 0);
            index=1;
            moveSlider(index);
        }
        $('.slider_panel').clearQueue();
    });
    //애니메이션 캔버스 영역에 이벤트
    $('#visual').hover(function() {
        $('.slider_panel').clearQueue();
        clearInterval(auto);
    }, function() {
        autoSlider();
    })
    //이미지 슬라이드 구현 함수
    function moveSlider(index) {
        $('.slider_panel').animate({
            left: -(index*1930)
        }, 1000)
    };
    //자동 이미지 슬라이드 구현 함수
    function autoSlider() {
        auto = setInterval(function() {
            $('.slider_panel').clearQueue();
            $('.right_control').trigger('click');
        }, 4000);
    }
});