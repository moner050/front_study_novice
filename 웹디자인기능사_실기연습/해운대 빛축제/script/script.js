(function($)
{
    var hlf = {
        init: function()
        {
            this.header();
            this.slide();
            this.tap();
            this.popUp();
        },
        header: function()
        {
            $('.main-btn').on({
                mouseenter: function()
                {
                    $(this).find('ul.sub').stop().slideDown(600);
                },
                focusin: function()
                {
                    $(this).find('ul.sub').stop().slideDown(600);
                }
            });
            $('.main-btn').on({
                mouseleave: function()
                {
                    $('ul.sub').stop().slideUp(600);
                },
                focusout: function()
                {
                    $('ul.sub').stop().slideUp(600);
                }
            })
        },
        slide: function()
        {
            var cnt = 0;
            var n = $('.slide').length-1;

            function mainSlide()
            {
                $('.slide').css({zIndex:1}).stop().animate({opacity: 1}, 0);
                $('.slide').eq(cnt==n?0:cnt+1).css({zIndex:2});
                $('.slide').eq(cnt).css({zIndex:3}).stop().animate({opacity: 0}, 1000);
            }

            function nextCount()
            {
                cnt++;
                if(cnt>n){cnt = 0}
                mainSlide();
            }

            setInterval(nextCount, 3000);
        },
        tap: function()
        {
            $('.tap-menu li').on({
                click: function()
                {
                    var idx = $(this).index();
                    $('.tap-item > *').hide().removeClass('on');
                    $('.tap-item > *').eq(idx).show().addClass('on');

                    $('.tap-menu li').removeClass('on');
                    $(this).addClass('on');
                }
            })
        },
        popUp: function()
        {
            $('.notice li:nth-child(1)').on({
                click: function()
                {
                    $('#popUpBox').show()
                }
            });
            $('.popUp button').on({
                click: function()
                {
                    $('#popUpBox').hide()
                }
            })
        }
    }
    hlf.init();

})(jQuery);