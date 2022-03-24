(function($)
{
    var namdo = {
        init: function()
        {
            this.header();
            this.slide();
            this.popup();
        },
        header: function()
        {
            $('.main-menu').on({
                mouseenter: function()
                {
                    $(this).find('.sub').stop().fadeIn(100);
                },
                focusin: function()
                {
                    $(this).find('.sub').stop().fadeIn(100);
                }
            });
            $('.main-menu').on({
                mouseleave: function()
                {
                    $(this).find('.sub').stop().fadeOut(100);
                },
                focusout: function()
                {
                    $(this).find('.sub').stop().fadeOut(100);
                }
            });
        },
        slide: function()
        {
            var slideWrap = $('.slide-wrap');

            setInterval(function()
            {
                slideWrap.stop().animate({'marginLeft' : '-100%'}, 700, function()
                {
                    $('.slide:first').appendTo(slideWrap);
                    $(slideWrap).css({'marginLeft' : '0'})
                })
            }, 3000)
        },
        popup: function()
        {
            $('.notice li:nth-child(1)').on({
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
    namdo.init();
})(jQuery);