(($)=>{


    const starBucks = 
    {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.footer();
    },
    header()
    {
        $('.main-btn').on({
            mouseenter()
            {
                $('.sub').stop().slideUp(0);
                $(this).next().slideDown(300);

                $('.main-btn').removeClass('addCurrent');
                $(this).addClass('addCurrent');
            },
            focusin()
            {
                $('.sub').stop().slideUp(0);
                $(this).next().slideDown(300);

                $('.main-btn').removeClass('addCurrent');
                $(this).addClass('addCurrent');
            }
        });

        $('#nav').on({
            mouseleave()
            {
                $('.sub').stop().slideUp(600);
                $('.main-btn').removeClass('addCurrent');
            }
        });
    },
    section1()
    {
    
    },
    section2()
    {
    
    },
    section3()
    {
    
    },
    section4()
    {
    
    },
    section5()
    {
    
    },
    section6()
    {
    
    },
    section7()
    {
    
    },
    section8()
    {
    
    },
    footer()
    {

    }
}
starBucks.init();



})(jQuery);