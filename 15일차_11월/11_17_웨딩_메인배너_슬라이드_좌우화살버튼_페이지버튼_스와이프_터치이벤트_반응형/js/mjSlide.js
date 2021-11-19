(function($, window){
    var cnt = 0;
    var count = 0;
    var slideW = 1903; //창 너비
    var slideH = 0; //창 높이
    var setId = null;  //타이머의 id 코드(십진수)



    // 반응형순서
    // 1. 반응형 함수
    function resizefn(){
        slideW = $(window).innerWidth();
        slideH = $(window).innerHeight();
        $('.slide').css({ width:slideW, height:slideH });
        mainSlide();
        return slideW;
    }

    // 2. 반응형 함수 로드시 실행
    resizefn();

    // 3. 리사이즈(창크기변화에 따라 즉시변화되는 반응형)
    $(window).resize(function(){
        resizefn();
    });


    //메인 배너 슬라이드 구현
    // 1. 메인 슬라이드 함수
    function mainSlide(){ //1 2 0 1 2 0
        $('.slide-wrap').stop().animate({ left: -slideW*cnt }, 1000, 'easeInOutExpo',function(){
            if(cnt>2){cnt=0} //마지막 슬라이드 이면 처음으로
            if(cnt<0){cnt=2} //처음 슬라이드 이면 마지막으로
            $('.slide-wrap').stop().animate({ left: -slideW*cnt }, 0); //순간이동 처음으로
        });
        pageEvent(); //페이지 이벤트 함수 호출
    }
    
 
    // 2-1. 다음 카운트 함수
    function nextCount(){
        cnt++; //변수 설정 안되면 절대 증가하지 않는데
        mainSlide()
    }
    // 2-1. 이전 카운트 함수
    function prevCount(){
        cnt--; //변수 설정 안되면 절대 증가하지 않는데
        mainSlide()
    }

    // 3. 자동 타이머 함수(셋인터발)
    function autoTimer(){
        setId = setInterval(nextCount, 3000);
    }
    autoTimer();


    // 4. 페이지 이벤트 함수
    function pageEvent(){
        $('.page-btn').removeClass('addCurrent'); //모두 삭제
        $('.page-btn').eq(cnt>2?0:cnt).addClass('addCurrent'); //현재 슬라이드 에만 빨강 컬러
    }

    // 정지하고 카운트한다
    // 1 2 3 4 5초이상 아무 이벤트가없으면
    // 다시 자동 타이머를 실행한다.autoTimer();
    function stopPlay(){
        clearInterval(setId);  //오토타이머중지
        clearInterval(id);  //카운트타이머중지
        count = 0; //카운트 변수 초기화
       var id = setInterval(function(){
            count++;  //카운트 1 2 3 4 5
            console.log( count );
            if( count>=5 ){
                clearInterval(id);
                clearInterval(setId);
                autoTimer();   //자동 타이머 호출 3초간격으로 다음 카운트 슬라이드 함수 호출 실행
            }
        }, 1000);  //1초에 한번씩 반복 실행
    }



    // 5. 화살 다음(next-btn) 이전(prev-btn) 버튼 클릭 이벤트
    // 5-1. 다음
    $('.next-btn').on({
        click: function(){
            stopPlay();
            if( !$('.slide-wrap').is(':animated') ){
                nextCount();
            }
            
        }
    });

    // 5-2. 이전
    $('.prev-btn').on({
        click: function(){
            stopPlay();
            if( !$('.slide-wrap').is(':animated') ){
                prevCount();
            }
        }
    });

    // 6. 페이지(.page-btn) 버튼 클릭 이벤트
    $('.page-btn').each(function(index){
        $(this).on({
            click:function(){
                stopPlay();
                cnt = index; //현재 클릭한 버튼의 번호
                mainSlide();
            }
        });
    });
    

    // 데스크탑
    // 7. 터치 스와이프 이베트 : 마우스 이벤트 - 1.마우스다운(시작좌표) >>  이동  >> 2.마우스업(앤드 좌표) 
    //                         마우스포인트 시작 - 마우스포인트 끝 = 양수 다음카운트, 음수 이전카운트



    // 8. 드래그앤 드롭  - 1. 마우스다운(mousedown)(시작좌표)-슬라이드박스의 좌측좌표-slideW  event.clientX
    //                    2. 마우스무브(mousemove)(드래그) :스타일 css({ left: 드래그끝 - 드래그시작 })
    //                    3. 마우스업(mouseup) : 드래그종료 (마우스다운을 종료)
    
    // 모바일 : 터치 이벤트- 1. 터치스타트(touchstart)  2.터치무브(touchmove) 3.터치앤드(touchend)
    // 9.   event.originalEvent.chanageTouches[0].clientX

    // 10. 미디어쿼리(스타일) 반응형 마무리 + js(반응형)
    var mouseStart = null;
    var mouseEnd = null;
    var dragStart = null;
    var dragEnd = null;
    var mouseDown = null;

    $('.slide-view').on({
        mousedown: function(e){
            stopPlay();
            // console.log( e );  //이벤트를 확인 originalEvent
            mouseStart = e.clientX;
            console.log( slideW );
            dragStart = e.clientX-$('.slide-wrap').offset().left-slideW;
            mouseDown = true;
        },
        mouseup: function(e){
            mouseDown = false;
            mouseEnd = e.clientX;
            if( mouseStart-mouseEnd > 0 ){
                nextCount();
            }
            if( mouseStart-mouseEnd < 0 ){
                prevCount();
            }
        },
        mouseout: function(e){
            if(!mouseDown){return}
            mouseDown = false;
            mouseEnd = e.clientX;
            if( mouseStart-mouseEnd > 0 ){
                nextCount();
            }
            if( mouseStart-mouseEnd < 0 ){
                prevCount();
            }
        },        
        mousemove: function(e){
            if(!mouseDown){return}
            dragEnd = e.clientX;
            $('.slide-wrap').css({ left: dragEnd-dragStart });

        }
    });

    // 모바일
    $('.slide-view').on({
        touchstart: function(e){
            stopPlay();
            console.log( e );  //이벤트를 확인 originalEvent
            mouseStart = e.originalEvent.changedTouches[0].clientX;
            console.log( slideW );
            dragStart = e.originalEvent.changedTouches[0].clientX-$('.slide-wrap').offset().left-slideW;
            mouseDown = true;
        },
        touchend: function(e){
            mouseDown = false;
            mouseEnd = e.originalEvent.changedTouches[0].clientX;
            if( mouseStart-mouseEnd > 0 ){
                nextCount();
            }
            if( mouseStart-mouseEnd < 0 ){
                prevCount();
            }
        },        
        touchmove: function(e){
            if(!mouseDown){return}
            dragEnd = e.originalEvent.changedTouches[0].clientX;
            $('.slide-wrap').css({ left: dragEnd-dragStart });

        }
    });





})(jQuery, window);