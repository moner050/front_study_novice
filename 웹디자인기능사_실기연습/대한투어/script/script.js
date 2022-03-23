(function($)
{
    var dhtour = {
        init: function()
        {
            this.header();
            this.slide();
            this.popUp();
        },
        header: function()
        {
            $('#nav ul').on({
                mouseenter: function()
                {
                    $('ul.sub').stop().slideDown(600);
                    $('.header-bg').stop().slideDown(600);
                },
                focusin: function()
                {
                    $('ul.sub').stop().slideDown(600);
                    $('.header-bg').stop().slideDown(600);
                }
            });
            $('#nav ul').on({
                mouseleave: function()
                {
                    $('ul.sub').stop().slideUp(400);
                    $('.header-bg').stop().slideUp(400);
                },
                focusout: function()
                {
                    $('ul.sub').stop().slideUp(400);
                    $('.header-bg').stop().slideUp(400);
                }
            })
        },
        slide: function()
        {
            var slideWrap = $('.slide-wrap');

            setInterval(function()
            {
                slideWrap.stop().animate({'margin-top' : '-300'}, 600, function()
                {
                    $('.slide:first').appendTo(slideWrap);
                    $(slideWrap).css({'margin-top' : '0'});
                })
            }, 3000)
        },
        popUp: function()
        {
            $('.notice ul li:nth-child(1)').on({
                click: function()
                {
                    $('#popUpBox').show();
                }
            });
            $('.popUp button').on({
                click: function()
                {
                    $('#popUpBox').hide();
                }
            })
        }

    }
    dhtour.init();

})(jQuery);