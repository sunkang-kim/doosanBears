$(function() {
    //메인 메뉴 이벤트
    var basicName = [];
    var subName = ['구단소개','선수단','경기일정','기록실','팬','미디어'];
    var index;
    $('.mainMenu>li').hover(function() {
        index = $(this).index();
        basicName[index] = $(this).html();
        $(this).children('a').html(subName[index]);
        $(this).children('ul').stop(true, true).show();
    }, function() {
        $(this).html(basicName[index]);        
    })
    $('.mainMenu').hover(function() {
        $('.mainMenu-bg').stop(true, true).show();
    }, function() {
        $('.mainMenu-bg').stop(true, true).hide();
    })
    //스폰서 메뉴 클릭 이벤트
    var auto;
    autoSlider();
    $('.SZleft').click(function() {
        $('.sponsor_wrapper').animate({
            left: 0
        }, 'middle', function() {
            $('.sponsor_wrapper').css('left', -112)
            $('.sponsor_wrapper a').eq(12).prependTo('.sponsor_wrapper')
        });
        
    });
    $('.SZright').click(function() {
        $('.sponsor_wrapper').animate({
            left: '-=' + 110
        }, 'middle', function() {
            $('.sponsor_wrapper').css('left', -112)
            $('.sponsor_wrapper a').eq(0).appendTo('.sponsor_wrapper')
        });
    });

    //스폰서 자동 슬라이드 구현 함수
    function autoSlider() {
        auto = setInterval(function() {
            $('.sponsor_wrapper').clearQueue();
            $('.SZright').trigger('click');            
        }, 3000);
        
    }

    //호버시 오토슬라이드 멈춤
    $('#footerInner').hover(function() {
        $('.sponsor_wrapper').clearQueue();
        clearInterval(auto);
    }, function() {
        autoSlider();
    })

});
