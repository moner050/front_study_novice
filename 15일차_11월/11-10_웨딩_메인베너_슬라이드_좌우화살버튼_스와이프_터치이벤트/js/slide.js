(function($)
{
    var cnt = 0;
    //메인 베너 슬라이드 구현
    // 1. 메인 슬라이드 함수
    function mainSlide(){
        console.log("슬라이드");
        $('.slide-wrap').animate({left:  -1903*cnt}, 800, function()
        {
            if(cnt>2){cnt=0}
            if(cnt<0){cnt=2}
            $('.slide-wrap').animate({left: -1903*cnt}, 0);
        });
        pageEvent();
    }

    // 2. 다음 카운트 함수
    function nextCount(){
        cnt++;
        mainSlide();
    }

    // 이전 카운트 함수
    function prevCount(){
        cnt--;
        mainSlide();
    }

    // 3. 자동 타이머 함수(셋인터벌)
    function autoTimer()
    {
        setInterval(nextCount, 3000);
    }
    // autoTimer();

    // 4. 페이지 이벤트 함수
    function pageEvent()
    {
        $('.page-btn').removeClass('addCurrent');
        $('.page-btn').eq(cnt>2?0:cnt).addClass('addCurrent');
        
    }

    // 5. 화살 버튼 클릭 이벤트
    $('.next-btn').on({
        click: function()
        {
            // alert("다음 클릭 버튼");
            nextCount();
        }
    });
    $('.prev-btn').on({
        click: function()
        {
            // alert("이전 클릭 버튼");
            prevCount();
        }
    });

    // 6. 페이지 버튼 클릭 이벤트
    $('.page-btn').each(function(index)
    {
        $(this).on({
            click: function()
            {
                cnt = index;
                // 메인함수 호출
                mainSlide();
            }
        });
    })

    // 7. 터치 스와이프 이벤트
})(jQuery);