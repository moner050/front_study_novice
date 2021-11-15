(function($, window)
{
    var cnt = 0;
    var w = 0;
    var h = 0;

    // 1. 반응형 함수 만들기
    function resizefn()
    {
        w = $(window).innerWidth();
        h = $(window).innerHeight();
        $('.slide').css({width: w, height: h});
        mainSlide();
    }

    // 2. 로드시 0.1초후 1회 실행하는 것 만들기
    setTimeout(resizefn, 100);


    // 3. 윈도우 리사이즈 메소드 만들기
    $(window).resize(function()
    {
        resizefn();
    });



    //메인 베너 슬라이드 구현
    // 1. 메인 슬라이드 함수
    function mainSlide(){
        // console.log("슬라이드");
        $('.slide-wrap').stop().animate({left:  -w*cnt}, 500, function()
        {
            if(cnt>2){cnt=0}
            if(cnt<0){cnt=2}
            $('.slide-wrap').animate({left: -w*cnt}, 0);
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

    // 7. 터치 스와이프 이벤트 : 마우스 다운, 마우스 업
    //    드래그 & 드롭 이벤트 : 마우스 다운, 마우스 무브, 마우스 업
    var start = null;
    var end = null;

    // 드래그 변수
    var dragStart = null;
    var dragEnd = null;
    var mouseDown = null;

        $('.slide-view').on({
            mousedown: function(event)  // 마우스가 클릭됐을때
            {
                // console.log('이벤트', event)
                // console.log('이벤트.clientX', event.clientX)
                start = event.clientX;
                dragStart = event.offsetX - $('.slide-wrap').offset().left-1903;
                mouseDown = true;
            },
            mouseup: function(event)    // 마우스 버튼이 올라왔을때
            {
                // end = event.clientX;
                end = event.offsetX;

                if(start-end > 120)
                {
                    nextCount();
                }
                else if(start-end < -120)
                {
                    prevCount();
                }
                // 마우스 업 드래그 좌표
                console.log("드래그 영역값 계산" + dragEnd - dragStart);
                mouseDown = false;
            },
            mouseout: function(event)
            {
                if( !mouseDown ){return}
                // end = event.clientX;
                end = event.offsetX;

                if(start-end > 120)
                {
                    nextCount();
                }
                else if(start-end < -120)
                {
                    prevCount();
                }
                // 마우스 업 드래그 좌표
                console.log("드래그 영역값 계산" + dragEnd - dragStart);
                mouseDown = false;
            },
            mousemove : function(event)
            {
                // 마우스 다운이 참이 아니면 탈출
                if( !mouseDown ){return}
                dragEnd = event.offsetX;
                $('.slide.wrap').css({left: dragEnd-dragStart});
            }
        });
})(jQuery, window);