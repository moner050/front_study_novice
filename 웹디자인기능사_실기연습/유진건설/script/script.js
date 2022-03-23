(function($)
{

    var yoojin = {

        init: function()
        {
            this.header();
            this.mainSlide();
            this.popUp();
        },
        header: function()
        {
            $('#nav').on({
                mouseenter: function()
                {
                    $('ul.sub').stop().slideDown(800);
                    $('.header-bg').stop().slideDown(800);
                },
                focusin: function()
                {
                    $('ul.sub').stop().slideDown(800);
                    $('.header-bg').stop().slideDown(800);
                }
            });
            $('#nav').on({
                mouseleave: function()
                {
                    $('ul.sub').stop().slideUp(600);
                    $('.header-bg').stop().slideUp(600);
                },
                focusout: function()
                {
                    $('ul.sub').stop().slideUp(600);
                    $('.header-bg').stop().slideUp(600);
                }
            })
        },
        mainSlide: function()
        {
            var cnt = 0;
            var n = $('.slide').length-1;

            function slide()
            {
                $('.slide').css({zIndex:1}).stop().animate({opacity:1}, 0);
                $('.slide').eq(cnt==n?0:cnt+1).css({zIndex:2});
                $('.slide').eq(cnt).css({zIndex:3}).stop().animate({opacity:0}, 1000);
            }

            function nextCount()
            {
                cnt++;
                if(cnt > n){cnt = 0}
                slide();
            }

            setInterval(nextCount, 3000);
        },
        popUp: function()
        {
            $('.notice>ul>li:nth-child(1)').on({
                click: function()
                {
                    $('.popUpBox').show();
                }
            });

            $('.popUp button').on({
                click: function()
                {
                    $('.popUpBox').hide();
                }
            })
        }

    }
    yoojin.init();

})(jQuery);