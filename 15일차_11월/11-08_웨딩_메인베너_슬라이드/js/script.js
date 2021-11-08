(function($)
{
    var cnt = 0;
    // 1. 메인 슬라이드(mainSlide()) : 애니메이션
    function mainSlide()
    {
        // console.log("카운트 확인 : " + cnt);
        $('.slide-wrap').stop().animate({left:-1280*cnt},600, function(){
            if(cnt > 2){cnt=0}  // 마지막 다음이면 처음 슬라이드로 초기화
            if(cnt < 0){cnt=2}  // 처음 이전이면 마지막 슬라이드로 초기화
            $('.slide-wrap').stop().animate({left:-1280*cnt}, 0);
        });
        pageEvent();            // 페이지 버튼 함수 호출
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
    $('.next-btn').click(function(event)
    {
        event.preventDefault(); // 버튼 이전의 기능을 삭제. 새로고침 기능을 삭제.
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
    $('.prev-btn').click(function(event)
    {
        event.preventDefault();
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

    //5. 페이지 이벤트 함수 - (메인함수랑 연동)
    // addClass(), removeClass(), toggleClass 사용
    function pageEvent()
    {
        // console.log(cnt);                                          // 2보다 큰 3을 0으로 바꾼다.
        // cnt는 현재 카운트 번호
        $('.page-btn').removeClass('current');   // 초기화
        $('.page-btn').eq(cnt>2?0:cnt).addClass('current');        // cnt 현재(슬라이드 카운터)
    }
    //5. 페이지 버튼 클릭 이벤트

})(jQuery);