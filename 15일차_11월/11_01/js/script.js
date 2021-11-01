alert("자바 스크립트 테스트!!");        // 얼럿트 함수(매서드)

(function($)
{
    // console.log("제이쿼리 테스트",$)

    // 객체(Object 오브젝트) 기반
    // 리터럴 객체 생성
    // var 객체변수 = {}
    var obj = 
    {
        cnt: 0,                // cnt속성(Property) == 맴버변수 cnt = 0
        init: function()        // 속성에 function() 키워드가 존자해면 매서드(왼쪽) == 맴버함수
        {
            alert(this.cnt);
            this.cnt = 50;
            alert(this.cnt);
        },
        babo: function()
        {
            alert(this.cnt);
            this.cnt = 100;
            alert(this.cnt);
        }
    }

    // obj.init();
    // obj.babo();

    var cnt = 0;

    // $('.선택자, #선택자, 태그').클릭이벤트(콜백함수 결과보여줄 실행내용(){})
    // 1씩 증가 다음 슬라이드
    $('.btn2').click(function()
    {
        // alert('버튼2 클릭 테스트');
        cnt++;
        if(cnt > 2)     // 마지막 번호보다 크면
        {
            cnt = 0;    // 0으로 돌아감
        }
        // alert(cnt);
        $('.slide-wrap').animate({left:(-1903*cnt)});
        
    });

    // 1씩 감소 이전 슬라이드
    $('.btn3').click(function()
    {
        // alert('버튼3 클릭 테스트');
        cnt--;
        if(cnt < 0)     // 첫번째 번호보다 작으면
        {
            cnt = 2;    // 마지막 번호로 돌아감
        }
        // alert(cnt);
        $('.slide-wrap').animate({left:(-1903*cnt)});
    });

})(jQuery);     // 웹페이지가 열릴때 곧바로 실행( load 실행)
