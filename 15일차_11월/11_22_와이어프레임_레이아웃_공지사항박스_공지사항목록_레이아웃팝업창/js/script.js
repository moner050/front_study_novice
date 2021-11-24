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
    

})(jQuery);