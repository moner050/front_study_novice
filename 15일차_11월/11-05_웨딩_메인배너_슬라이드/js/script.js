(function($)
{
    var cnt = 0;
    // 1. 메인 슬라이드(mainSlide()) : 애니메이션
    function mainSlide()
    {
        console.log("카운트 확인 : " + cnt);
        $('.slide-wrap').stop().animate({left:-1280*cnt},600, function(){
            if(cnt > 2){cnt=0}  // 마지막 다음이면 처음 슬라이드로 초기화
            if(cnt < 0){cnt=2}  // 처음 이전이면 마지막 슬라이드로 초기화
            $('.slide-wrap').stop().animate({left:-1280*cnt}, 0);
        });
    }

    // 2. 다음 카운트 함수(nextCount()) : 카운트
    // 2-1 다음 카운트 함수
    function nextCount()
    {
        cnt++;          // 누적 증가 변수
        mainSlide();
    }
    // 2-2 이전 카운트 함수
    function prevCount()
    {
        cnt--;          // 누적 증가 변수
        mainSlide();
    }

    // 3. 타이머: setInterval(다음 카운트 함수, 3000)
    // setInterval(nextCount, 3000);

    // 4. 화살버튼 클릭 이벤트(다음 슬라이드, 이전 슬라이드)
    
    // 4-1. 다음 화살버튼 클릭 이벤트
    $('.next-btn').click(function()
    {
        // 선택자 .slide-wrap 이 애니메이션이 진행중이면 클릭을 못하게 막는다.
        // 애니메이트가 진행중이 아니면 nextCount() 함수 호출
        if($('.slide-wrap').is(':animated') )
        {
            alert("천천히 눌러주세요");
        }
        else
        {
            nextCount();
        }
    });
    // 4-2. 이전 화살버튼 클릭 이벤트
    $('.prev-btn').click(function()
    {
        // 애니메이트가 진행중이 아니면 prevCount() 함수 호출
        if($('.slide-wrap').is(':animated'))
        {
            alert("천천히 눌러주세요");
        }
        else
        {
            prevCount();
        }
        
    });
})(jQuery);