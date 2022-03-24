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
            var slideWrap = $('.slide-wrap');

            setInterval(function()
            {
                slideWrap.stop().animate({'margin-left' : '-1200px'}, 800, function()
                {
                    $('.slide:first').appendTo(slideWrap);
                    slideWrap.css({'margin-left' : '0'});
                })
            }, 3000)
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
