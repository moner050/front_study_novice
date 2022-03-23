(function($)
{
    var dhbank = {

        init: function()
        {
            this.header();
            this.slide();
            this.popUp();
        },
        header: function()
        {
            $('#nav > ul').on({
                mouseenter: function()
                {
                    $('ul.sub').stop().slideDown(700);
                    $('.header-bg').stop().slideDown(700);
                },
                focusin: function()
                {
                    $('ul.sub').stop().slideDown(700);
                    $('.header-bg').stop().slideDown(700);
                }
            });
            $('#nav > ul').on({
                mouseleave: function()
                {
                    $('ul.sub').stop().slideUp(600);
                    $('.header-bg').stop().slideUp(700);
                },
                focusout: function()
                {
                    $('ul.sub').stop().slideUp(600);
                    $('.header-bg').stop().slideUp(700);
                }
            });
        },
        slide: function()
        {
            var slideWrap = $('.slide-wrap');
            setInterval(function()
            {
                slideWrap.stop().animate({'margin-left' : '-1200'}, 600, function()
                {
                    $('.slide:first').appendTo(slideWrap)
                    $(slideWrap).css({'margin-left' : '0'})
                })
            }, 3000);
        },
        popUp: function()
        {   
            $('.notice li:nth-child(1)').on({
                click: function()
                {
                    $('.popUpBox').show();
                }
            }),
            $('.popUp button').on({
                click: function()
                {
                    $('.popUpBox').hide();
                }
            })
        }

    }
    dhbank.init();


})(jQuery);