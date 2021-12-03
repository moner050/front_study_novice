(function($)
{
    // 객체(Object)
    // 1. 생성자 방식
    // var wedding = new Object();

    // 2. 리터럴 방식
    var wed = {
        맴버변수1: 0,               // 맴버변수 == 속성(프로퍼티)
        맴버변수2: true,            // 속성(프로퍼티)
        맴버변수3: '문자열 변수값',
        맴버함수1: function()       // 애서드
        {
            var a = 0;
            var b = 89;
            console.log('맴버함수1 변수 a',a);
            console.log('맴버함수1 변수 b',b);
        },
        맴버함수2: function()       // 메서드
        {
            var a = 0;
            var b = 6;
            console.log('맴버함수2 변수 a',a);
            console.log('맴버함수2 변수 b',b);
            // 맴버변수 가져오기.
            console.log('this.맴버변수1',this.맴버변수1);
            console.log('this.맴버변수2',this.맴버변수2);
            console.log('this.맴버변수3',this.맴버변수3);
        }
    }

    wed.맴버함수1();
    wed.맴버함수2();

    ////////////////////////////////////////
    var wedding = {
        init: function()
        {
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.footer();
            this.popup();
            this.jsondata();
        },
        header: function()
        {
            // 네비게이션 GNB 메인버튼 이벤트
            // 접근성 추가 : 키보드 TAB 키로 접근 가능해야 함.
            $('.main-btn').on({
                mouseenter: function()
                {
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(300, 'easeInOutExpo');
                    $('.main-btn').removeClass('addCurrent');   // 초기화 삭제 클래스
                    $(this).addClass('addCurrent');             // 현재 메인메뉴에만 클래스 추가
                },
                focusin: function()     // focus == focusin <==> blur === focusout
                {
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(300, 'easeInOutExpo');
                    $('.main-btn').removeClass('addCurrent');   // 초기화 삭제 클래스
                    $(this).addClass('addCurrent');             // 현재 메인메뉴에만 클래스 추가
                }
            });

            // 네비게이션 영역을(#nav) 마우스(mouse)가 떠나면(leave) 모든 서브메뉴(.sub) 접힘(SlideUp(300)).
            $('#nav').on({
                mouseleave: function()
                {
                    $('.sub').stop().slideUp(600, 'easeInOutExpo');
                    $('.main-btn').removeClass('addCurrent');   // 초기화 삭제 클래스
                }
            });
        },
        section1: function()
        {
            ///////////////////////////   메인 슬라이드   ////////////////////////////////////////////
            var cnt = -1;
            var slideWrap = $('.slide-wrap');
            var n = $('.slide').length-1;       // 슬라이드의 개수를 세줌
                // alert(n);

            // 1. 메인슬라이드 함수
            function mainSlide()
            {
                $('.slide')                   .css({zIndex:1}).stop().animate({opacity:1},    0);         // 모든 슬라이드 초기화

                $('.slide').eq(cnt==n?0:cnt+1).css({zIndex:2});
                $('.slide').eq(cnt)           .css({zIndex:3}).stop().animate({opacity:0}, 1000);
            }

            // 2. 다음 카운트 함수
            function nextCount()
            {
                cnt++;
                if(cnt>n){cnt=0}
                mainSlide();
            }

            // 3. 타이머(setInterval) 3초간격 반복
            setInterval(nextCount ,3000);

        },
        section2: function()
        {
            // 섹션2
            // 갤러리 버튼 클릭 이벤트
            $('.gallery-btn').on({
                click: function()
                {
                    $('.notice-btn, .gallery-btn, .notice-box, .gallery-box').addClass('addGallery');
                }
            });
            // 공지사항 버튼 클릭 이벤트
            $('.notice-btn').on({
                click: function()
                {
                    $('.notice-btn, .gallery-btn, .notice-box, .gallery-box').removeClass('addGallery');
                }
            });
        },
        section3: function()
        {
            console.log('section3 메서드 실행');
        },
        footer: function()
        {
            console.log('footer 메서드 실행');

            var 배열 = ['피자','파스타','감자탕','닭갈비','순대국'];
            var 객체 = {"학번": '2021001', "성명": '차분희', "연락처": '010-7654-5300'};

            var 배열객체 = [
                {메인메뉴:'메인메뉴-1', 서브메뉴:['서브메뉴-1','서브메뉴-2','서브메뉴-3','서브메뉴-4']},
                {메인메뉴:'메인메뉴-2', 서브메뉴:['서브메뉴-1','서브메뉴-2','서브메뉴-3','서브메뉴-4']},
                {메인메뉴:'메인메뉴-3', 서브메뉴:['서브메뉴-1','서브메뉴-2','서브메뉴-3','서브메뉴-4']},
                {메인메뉴:'메인메뉴-4', 서브메뉴:['서브메뉴-1','서브메뉴-2','서브메뉴-3','서브메뉴-4']}
            ];
            console.log(배열[0]);
            console.log(배열[1]);
            console.log(배열[2]);
            console.log(배열[3]);
            console.log(배열[4]);

            for(var i = 0; i<배열.length;i+=1)
            {
                console.log("for()반복문",i, 배열[i]);
            }

            for(i in 배열){
                console.log('for in',i);
            }

            for(i of 배열)
            {
                console.log("for of", i);
            }

            
            //리턴을 이요하는 배열 값 출력
            var result = '';
            배열.forEach(function (value, index, array){
                console.log(index,value);
                result += ' ' + value;
            });
            console.log("변수값을 활용한 리턴값", result);

            //리턴을 이용한 배열 값 출력
            var result = 배열.map(function(value, index, array){
                return {
                    value,
                    index
                }
            });
            console.log(result);

            // for in
            for(i in 배열)
            {
                
            }




        },
        popup: function()
        {
            // 팝업창 열기 이벤트
            $('.notice-list-btn').on({
                click: function()
                {
                    var txt = $(this).text();
                    var dates = $(this).next().text();
                    $('.title').text( txt );
                    $('.date').text( dates );
                    $('#popup').stop().show();
                }
            });
            // 팝업창 닫기 이벤트
            $('.close_btn').on({
                click: function()
                {
                    $('#popup').stop().hide();
                }
            });
            
            // 자바스크립트 팝업창 클릭 시  닫기
            // 그러나 자식요소는 클릭 시 닫지않는다.
            // 닫기 버튼은 닫는다.
            // console.log(event)   =   지금 클릭한 요소
            // console.log(event.target)   =   지금 클릭한 요소
            // console.log(event.currentTarget)   =      선택한 선택자 selector
            // event.currentTarget : 선택한 선택자 selector         div#popup
            
            $('#popup').on({
                click: function(event)
                {
                    if(event.target !== event.currentTarget)
                    {return false;}
                    $('#popup').stop().hide();
                }
            })
        },

        jsondata: function()
        {
            // 외부데이터 JSON 데이터 처리
            $.ajax({
                url:'./data/notice.json',
                type:'GET',                 // 서버에 전송할때는 POST
                success: function(result)   // 오류결과 확인하기
                {
                    // console.log(result);
                    console.log(result.공지사항);
                    console.log(result.새소식);
                    console.log(result.갤러리);
                },
                error: function(error)
                {
                    alert('ajax Error');
                    console.log("ajax 오류입니다.",error);
                }
            });
        }
    }

    wedding.init();



})(jQuery);