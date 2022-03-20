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
            var cnt = 0;
            var slideWrap = $('.slideWrap');

            function mainSlide()
            { 
                slideWrap.stop().animate({left: -1200*cnt}, 800, function()
                {
                    if(cnt > 2) {cnt = 0}
                    slideWrap.stop().animate({left: -1200*cnt}, 0);
                })
            }

            function nextCount()
            {
                cnt++;
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