(($)=>{


    const starBucks = 
    {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.footer();
    },
    header()
    {
        $('.main-btn').on({
            mouseenter()
            {
                $('.sub').stop().slideUp(0);
                $(this).next().slideDown(300);

                $('.main-btn').removeClass('addCurrent');
                $(this).addClass('addCurrent');
            },
            focusin()
            {
                $('.sub').stop().slideUp(0);
                $(this).next().slideDown(300);

                $('.main-btn').removeClass('addCurrent');
                $(this).addClass('addCurrent');
            }
        });

        $('#nav').on({
            mouseleave()
            {
                $('.sub').stop().slideUp(600);
                $('.main-btn').removeClass('addCurrent');
            }
        });
        
        // aside 통합검색 버튼 이벤트
        // 1. 검색 버튼(search-btn)을 클릭시 선택자(#aside)에 추가클래스 addClass('addSearch')가 추가되면
        //    너비가 부드럽게 늘어난다. 입력상자가 보인다.
        // 2. $('#aside') 요소에 추가된 클래스(addSearch)가 있다면(참 true 이면)
        //    검색 버튼을 누르면 입력상자에 입력된 내용 여부에 따라 오류메시지 또는 전송을 한다.
        //    입력내용이 있으면 전송하고, 없으면 오류메시지 출력

        $('.search-btn').on({
            click()
            {   // 해당(선택자) 요소에 addSearch 클래스가 있다면 입력상자에 입력 여부를 판단하고 처리한다.
                // 만약 클래스가 없다면(false이면) 
                // 논리비교는 반드시 === 를 써야한다.
                // 1 == "1"  true
                // 1 === "1" false
                if( $('#aside').hasClass('addSearch') )
                {
                    // alert('클래스 추가된 상태. 검색할 내용을 입력상자에 입력하세요.');
                    if( $('#search').val() == "" )
                    {// 입력 상자에 입력 내용이 없다면
                        alert('입력상자에 검색할 내용이 없습니다.');
                    }
                    else
                    {
                        alert('전송 완료');
                        // search.submit();
                        // AJAX 전송 PHP파일

                    }
                }
                else
                {  
                    $('#aside').addClass('addSearch');
                }
                // $('#aside').toggleClass('addSearch');
            }
        })

    },

    section1()
    {
        function anifn()
        {
            $('.ani1').stop().animate({opacity:1},500, function(){
                $('.ani2').stop().animate({opacity:1},500, function(){
                    $('.ani3').stop().animate({opacity:1},500, function(){
                        $('.ani4').stop().animate({opacity:1},500, function(){
                            $('.ani5').stop().animate({opacity:1},500,);
                        });
                    });
                });
            });
        }
        setTimeout(anifn, 800);

        
    },
    section2()
    {
        // 공지사항 리스크 롤링 텍스트 슬라이드
        // z-index가 중요하다.
        // 변수는 카운트 변수
        // 타이머 interval second함수
        let cnt = -1;
        let interval = 3000;

        // 1. 메인슬라이드 함수 제작
        function mainSlide()
        {   // 초기화
            $('.notice-slide')                     .css({zIndex:1}).animate({top:24},0);
            // 현재 슬라이드
            $('.notice-slide').eq(cnt)             .css({zIndex:2}).animate({top:0},0);
            // 다음 슬라이드
            $('.notice-slide').eq(cnt>=4?0:(cnt+1)).css({zIndex:3}).animate({top:24},0).animate({top:0},600);
        }
        // 2. 다음카운트 함수
        function nextCount()
        {
            cnt++;
            if(cnt>4)
            {
                cnt = 0;
            }
            mainSlide();
        }

        // 3. 타이머
        function timer()
        {
            // nextCount 함수를 interval초만큼 호출
            setInterval(nextCount, interval);    
        }
        // 홈페이지 로딩 시 타이머함수 실행.
        timer();
    },
    section3()
    {
        // 프로모션버튼 이벤트
        // 한번 클릭하면 부드럽게 펼쳐지고(slideDown(300))
        // 또 한번 클릭하면 부드럽게 접힌다.(slideUp(300))
        // 슬라이드토글: slideToggle(300)
        // $('#section3').slideUp(0);
        
        $('.promotion-btn').on({
            click: function(e)
            {
                e.preventDefault();
                $('#section3').slideToggle(300);
            }
        });

        let cnt = 0;
        // 1. 메인 슬라이드
        function mainSlide()
        {
            $('.slide-wrap').stop().animate({left:-829*cnt}, 600, function()
            {
                if(cnt > 2)
                {
                    cnt = 0;
                }
                $('.slide-wrap').stop().animate({left:-829*cnt}, 0);
            });
        }
        // 2. 다음 카운트
        function nextCount()
        {
            cnt++;
            mainSlide();
        }
        // 3. 타이머
        function timer()
        {
            setInterval(nextCount, 2800);
        }
        timer();
    },
    section4()
    {
    
    },
    section5()
    {
    
    },
    section6()
    {
    
    },
    section7()
    {
    
    },
    section8()
    {
    
    },
    footer()
    {

    }
}
starBucks.init();



})(jQuery);