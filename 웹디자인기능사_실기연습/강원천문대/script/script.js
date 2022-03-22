(function()
{
    var gangwon = {
        init: function()
        {
            this.header();
            this.mainSlide();
            this.mainTap();
        },
        header: function()
        {
            $('#nav > ul').on({
                mouseenter: function()
                {
                    $('ul.sub').stop().slideDown(800);
                },
                focusin: function()
                {
                    $('ul.sub').stop().slideDown(800);
                }
            });
            $('#nav > ul').on({
                mouseleave: function()
                {
                    $('ul.sub').stop().slideUp(600);
                }
            })
        },
        mainSlide: function()
        {
            var cnt = -1;
            var n = $('.slide').length-1;

            function mainSlide()
            {
                $('.slide').css({zIndex:1}).stop().animate({opacity:1}, 0);
                $('.slide').eq(cnt==n?0:cnt+1).css({zIndex:2});
                $('.slide').eq(cnt).css({zIndex:3}).stop().animate({opacity:0}, 1000);
            }

            function nextCount()
            {
                cnt++;
                if(cnt > n){cnt = 0}
                mainSlide();
            }

            setInterval(nextCount, 3000);
        },
        mainTap: function()
        {
            function menuClick()
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
            }
            menuClick();
        }

    }
    gangwon.init();

})(jQuery)