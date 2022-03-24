(function($)
{

    var hdlf = {

        init: function()
        {
            this.header();
            this.slide();
            this.tap();
            this.popup();
        },
        header: function()
        {
            $('li.main-btn').on({
                mouseenter: function()
                {
                    var idx = $(this).index();
                    $('ul.sub').eq(idx).stop().slideDown(600);
                },
                focusin: function()
                {
                    var idx = $(this).index();
                    $('ul.sub').eq(idx).stop().slideDown(600);
                }
            });
            $('li.main-btn').on({
                mouseleave: function()
                {
                    var idx = $(this).index();
                    $('ul.sub').eq(idx).stop().slideUp(400);
                },
                focusout: function()
                {
                    var idx = $(this).index();
                    $('ul.sub').eq(idx).stop().slideUp(400);
                }
            })
        },
        slide: function()
        {
            var cnt = 0;
            var n = $('.slide').length -1;

            function mainSlide()
            {
                $('.slide').css({zIndex:1}).animate({opacity:1}, 0);
                $('.slide').eq(cnt==n?0:cnt+1).css({zIndex:2});
                $('.slide').eq(cnt).css({zIndex:3}).animate({opacity:0}, 1000);
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
                    $('.tap-menu li').removeClass('on');
                    $('.tap-menu li').eq(idx).addClass('on');

                    $('.tap-item > *').hide().removeClass('on');
                    $('.tap-item > *').eq(idx).show().addClass('on');
                }
            })
        },
        popup: function()
        {
            $('.notice:nth-child(1)').on({
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

    hdlf.init();

})(jQuery);