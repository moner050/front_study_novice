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
            var slideWrap = $('.slideWrap');

            setInterval(function()
            {
                slideWrap.stop().animate({'margin-top':'-300'}, 600 ,function(){
                    $('.slide:first').appendTo(slideWrap)
                    $(slideWrap).css({'margin-top':'0'})
                })
            },3000)
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