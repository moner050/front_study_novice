(function($)
{
    var cnt = 0;
    // alert('jQuery 테스트')
    // 메인 베너 슬라이드 개발 구형
    // 홈페이지 로딩 시 3초 후에 다음 슬라이드 이동
    // 3초간격으로 자동으로 우측에서 좌측으로 화면너비(1903px)의 길이만큼 이동하는 슬라이드

    // 1. 메인 슬라이드 함수
    function mainSlide()
    {
        // alert(cnt);
        $('.slide-wrap').animate({left:-1903*cnt},1000, function(){
            if(cnt>2){cnt = 0}
            $('.slide-wrap').animate({left:-1903*cnt}, 0); // 눈속임 리턴
        });
    }
    // 2. 다음(Next) 카운트 함수
    function nextCount()
    {
        cnt++;
        mainSlide();
    }
    // 3. 타이머 호출 
    setInterval(nextCount, 3000);


})(jQuery);