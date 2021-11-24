(function($)
{
    // 네비게이션 GNB 메인버튼 이벤트
    // 접근성 추가 : 키보드 TAB 키로 접근 가능해야 함.
    $('.main-btn').on({
        mouseenter: function()
        {
            $('.sub').stop().slideUp(0);
            $(this).next().stop().slideDown(600);
        },
        focusin: function()     // focus == focusin <==> blur === focusout
        {
            $('.sub').stop().slideUp(0);
            $(this).next().stop().slideDown(600);
        }
    });

    // 네비게이션 영역을(#nav) 마우스(mouse)가 떠나면(leave) 모든 서브메뉴(.sub) 접힘(SlideUp(300)).
    $('#nav').on({
        mouseleave: function()
        {
            $('.sub').stop().slideUp(600);
        }
    });



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


})(jQuery);