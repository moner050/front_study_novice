(function($)
{
    var just = {
        init: function()
        {
            this.header();
            this.mainSlide();
            this.tapMenu();
            this.popUp();
        },
        header: function()
        {
            $('#nav >ul').on({
                mouseenter: function()
                {
                    $('ul.sub').stop().slideDown(800);
                },
                focusin: function()
                {
                    $('ul.sub').stop().slideDown(800);
                }
            });
            $('#nav >ul').on({
                mouseleave: function()
                {
                    $('ul.sub').stop().slideUp(500);
                }
            });
        },
        mainSlide: function()
        {
            var cnt = -1;
            var n = $('.slide').length-1;

            function mainSlide()
            { 
                $('.slide')                   .css({zIndex:1}).stop().animate({opacity:1},    0);         // 모든 슬라이드 초기화

                $('.slide').eq(cnt==n?0:cnt+1).css({zIndex:2});
                $('.slide').eq(cnt)           .css({zIndex:3}).stop().animate({opacity:0}, 1000);
            }

            function nextCount()
            {
                cnt++;
                if(cnt > n) {cnt = 0;}
                mainSlide();
            }

            setInterval(nextCount, 3000);
            
        },
        tapMenu: function()
        {
            function menuClick()
            {
                $('.tapMenu li').on({
                    click: function()
                    {
                        var idx = $(this).index();
                        $('.tapItem > *').hide().removeClass('on');
                        $('.tapItem > *').eq(idx).show().addClass('on');

                        $('.tapMenu li').removeClass('on');
                        $(this).addClass('on');
                    }
                })
            }
            menuClick();
        },
        popUp: function()
        {
            function popupClick()
            {
                $('.notice li:nth-child(1)').on({
                    click: function()
                    {
                        $('.popUpBox').show();
                    }
                })

                $('.popUp button').on({
                    click: function()
                    {
                        $('.popUpBox').hide();
                    }
                })
            }
            popupClick();
        }
    }
    just.init();
})(jQuery);