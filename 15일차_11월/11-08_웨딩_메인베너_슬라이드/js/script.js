(function($)
{
    var cnt = 0;
    var pageBtn = $('.page-btn');
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
    $('.next-btn')
    .click(function(event)
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

    // $('.next-btn').click();

    // $('.next-btn')
    //     .click(function(event)
    //     {
    //         event.preventDefault();
    //     })
    //     .mouseEnter(function()
    //     {

    //     })
    //     .mouseLeave(function()
    //     {

    //     });

    // $('.next-btn').on('click', function(event)
    // {
    //      event.preventDefault();
    // });

    // 실무방식
    // $('.next-btn').on({
    //     click: function(event)   // 메서드
    //     {
    //         event.preventDefault();
    //     },
    //     mouseEnter: function()
    //     {
            
    //     },
    //     mouseLeave: function()
    //     {

    //     }
    // });


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
        pageBtn.removeClass('current');   // 초기화
        pageBtn.eq(cnt>2?0:cnt).addClass('current');        // cnt 현재(슬라이드 카운터)
    }


    // 삼항연산자(물음표 연산자) 설명
    // 조건문 ? True일때 반환 : False일때 반환;
    // cnt가 2보다 크면 0을 반환하고 아니면 cnt값을 반환.
    // cnt > 2 ? 0 : cnt;

    // var x = cnt;
    // if(x>2){x=0} == x = (cnt > 2 ? 0 : cnt);




    //6. 페이지 버튼 클릭 이벤트
    // pageBtn.eq(0).on({
    //     click: function()
    //     {
    //         // alert('1번째 클릭완료');
    //         // 메인함수 호출
    //         cnt = 0;
    //         mainSlide();
    //     }
    // });
    // pageBtn.eq(1).on({
    //     click: function()
    //     {
    //         // alert('2번째 클릭완료');
    //         cnt = 1;
    //         mainSlide();
    //     }
    // });
    // pageBtn.eq(2).on({
    //     click: function()
    //     {
    //         // alert('3번째 클릭완료');
    //         cnt = 2;
    //         mainSlide();
    //     }
    // });

    // each 메서드 : 다중(여러개) 클래스를 배열처리 하여 인덱스 번호 사용 가능 
    pageBtn.each(function(index)
    {
        $(this).on(                     // 현재 인덱스 버튼을 this라고 한다.
        {
            click: function()
            {
                // console.log(index);
                cnt = index;
                mainSlide();
            }
        })
    });


})(jQuery);