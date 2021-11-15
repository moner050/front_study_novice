(function($, window)
{
    var cnt = 0;
    var wSlide = 0;
    var hSlide = 0;

    // 1. 반응형 함수 만들기
    function resizefn()
    {
        wSlide = $(window).innerWidth();
        hSlide = $(window).innerHeight();
        $('.slide').css({width: wSlide, height: hSlide});        
        // $('.slide-wrap').css({width: wSlide*5, marginLeft: -wSlide});
        // 메인슬라이드를 반응형 함수에 연결
        mainSlide();
    }
    resizefn();
    // 로드 시 0.1 초 후에 실행
    setTimeout(resizefn, 100);

    // 응용
    // setTimeout(function()
    // {
    //     resizefn();
    // }, 100);



    // 2. 윈도우 리사이즈 메서드
    $(window).resize(function()
    {
        resizefn();
    });




    // 3. 메인 슬라이드를 반응형 함수에 연결
    //메인 베너 슬라이드 구현
    // 1. 메인 슬라이드 함수
    function mainSlide(){
        // console.log("슬라이드");
        $('.slide-wrap').stop().animate({left:  -wSlide*cnt}, 500, function()
        {
            if(cnt>2){cnt=0}
            if(cnt<0){cnt=2}
            $('.slide-wrap').animate({left: -wSlide*cnt}, 0);
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
    var start = null;
    var end = null;
    if($('.slide-wrap').is(':animated') )
    {
        console.log('너무빠름');
    }
    else
    {
        $('.slide-view').on({
            mousedown: function(event)  // 마우스가 클릭됐을때
            {
                // console.log('이벤트', event)
                // console.log('이벤트.clientX', event.clientX)
                start = event.clientX;
            },
            mouseup: function(event)    // 마우스 버튼이 올라왔을때
            {
                end = event.clientX;
                console.log('start', start);
                console.log('end', end);
                console.log('start - end : ',start - end);
                if(start-end > 120)
                {
                    nextCount();
                }
                else if(start-end < -120)
                {
                    prevCount();
                }
            }
        })
    }
})(jQuery, window);