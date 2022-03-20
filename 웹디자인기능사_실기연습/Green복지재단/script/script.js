(function($)
{

    var green = {
        init: function()
        {
            this.header();
            this.mainSlide();
            this.popup();
        },
        header: function()
        {
            $('#nav > ul').on({
                mouseenter: function()
                {
                    $('ul.sub').stop().slideDown(600);
                    $('.headerBg').stop().slideDown(600);
                },
                focusin: function()
                {
                    $('ul.sub').stop().slideDown(600);
                    $('.headerBg').stop().slideDown(600);
                },
                mouseleave: function()
                {
                    $('ul.sub').stop().slideUp(500);
                    $('.headerBg').stop().slideUp(500);
                }
            });
        },
        mainSlide: function()
        {
            var cnt = 0;
            var slideWrap = $('.slide-wrap');

            function mainSlide()
            {
                slideWrap.stop().animate({left: -1200*cnt}, 800, function()
                {
                    if(cnt > 2){cnt = 0}
                    slideWrap.stop().animate({left: -1200*cnt}, 0);
                });
            }

            function nextCount()
            {
                cnt++;
                mainSlide();
            }

            setInterval(nextCount, 3000);
        },
        popup: function()
        {
            $('.notice li:nth-child(1)').on({
                click: function()
                {
                    $('.popUpBox, .popUpBg').show()
                }
            });
            $('.popUp button').on({
                click: function()
                {
                    $('.popUpBox, .popUpBg').hide()
                }
            })
        }
    }
    green.init();

})(jQuery);
