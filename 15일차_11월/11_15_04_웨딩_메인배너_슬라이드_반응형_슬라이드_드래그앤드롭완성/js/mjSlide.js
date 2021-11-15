(function($, window){
    var cnt = 0;
    var w = 0;  //슬라이드 너비 변수
    var h = 0;  //슬라이드 높이 변수

        //1. 반응형 함수
        function resizefn(){
            w = $(window).innerWidth();
            h = $(window).innerHeight();
            $('.slide').css({ width: w, height: h });
            //5. 메인슬라이드를 반응형 함수에 연결(연동) 시킨다.
            mainSlide();
        }        
        //2.로드시 0.1초 후에 1회 실행 끝
        setTimeout(resizefn, 100); 

        //3. 윈도우 리사즈 메서드
        $(window).resize(function(){
            //4. 반응형 함수 리사즈 호출 실행
            resizefn();
        });

        //메인 배너 슬라이드 구현
        // 1. 메인 슬라이드 함수
        function mainSlide(){ //1 2 0 1 2 0
            $('.slide-wrap').stop().animate({ left: -w*cnt }, 600, function(){
                if(cnt>2){cnt=0} //마지막 슬라이드 이면 처음으로
                if(cnt<0){cnt=2} //처음 슬라이드 이면 마지막으로
                $('.slide-wrap').stop().animate({ left: -w*cnt }, 0); //순간이동 처음으로
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
            setInterval(nextCount, 3000);
            // setInterval(prevCount, 3000);
        }
        //autoTimer();


        // 4. 페이지 이벤트 함수
        function pageEvent(){
            $('.page-btn').removeClass('addCurrent'); //모두 삭제
            $('.page-btn').eq(cnt>2?0:cnt).addClass('addCurrent'); //현재 슬라이드 에만 빨강 컬러
        }

        // 5. 화살 다음(next-btn) 이전(prev-btn) 버튼 클릭 이벤트
        // 5-1. 다음
        $('.next-btn').on({
            click: function(){
                if( !$('.slide-wrap').is(':animated') ){
                    nextCount();
                }
                
            }
        });

        // 5-2. 이전
        $('.prev-btn').on({
            click: function(){
                if( !$('.slide-wrap').is(':animated') ){
                    prevCount();
                }
            }
        });

        // 6. 페이지(.page-btn) 버튼 클릭 이벤트
        $('.page-btn').each(function(index){
            $(this).on({
                click:function(){
                    cnt = index; //현재 클릭한 버튼의 번호
                    mainSlide();
                }
            });
        });
        


        // 7. 터치 스와이프 이베트 : 마우스다운, 마우스업
        //    드래그 & 드롭 이벤트 : 마우스다운, 마우스 무브, 마우스 업, 마우스 아웃
        var start     = null;
        var end       = null;

        // 드래그 변수
        var dragStart = null;
        var dragEnd   = null
        var mouseDown = null;


        $('.slide-view').on({
            mousedown: function(event){
                // start = event.clientX;
                start = event.offsetX;

                dragStart = event.offsetX - $('.slide-wrap').offset().left-1903;  //드래그 시작
                mouseDown = true;  //마우스 다운 값 참
            },
            mouseup: function(event){
                // end = event.clientX;  
                end = event.offsetX;  
                if( start-end > 10 ){
                    if( !$('.slide-wrap').is(':animated') ){
                        nextCount();
                    }
                }
                if( start-end < -10){
                    if( !$('.slide-wrap').is(':animated') ){
                        prevCount();
                    }
                }

                // 마우스 업 드래그 좌표 계산
                mouseDown = false; //드래그 종료
            },
            mouseout: function(event){
                //마우스가 다운이 참이 아니면 탈출
                if( !mouseDown ){return}

                // end = event.clientX;  
                end = event.offsetX;  
                if( start-end > 10 ){
                    if( !$('.slide-wrap').is(':animated') ){
                        nextCount();
                    }
                }
                if( start-end < -10){
                    if( !$('.slide-wrap').is(':animated') ){
                        prevCount();
                    }
                }

                // 마우스 업 드래그 좌표 계산
                mouseDown = false; //드래그 종료
            },
            mousemove: function(event){
                //마우스가 다운이 참이 아니면 탈출
                if( !mouseDown ){return}

                dragEnd = event.offsetX; //드래그 앤드(끝) 좌표
                $('.slide-wrap').css({ left: dragEnd-dragStart  });

            }
        });



})(jQuery, window);