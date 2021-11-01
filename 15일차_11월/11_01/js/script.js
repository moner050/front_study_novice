alert("자바 스크립트 테스트!!");        // 얼럿트 함수(매서드)

(function()
{
    // console.log("제이쿼리 테스트",$)

    // 객체(Object 오브젝트) 기반
    // 리터럴 객체 생성
    // var 객체변수 = {}
    var obj = 
    {
        cnt: 0,                // cnt속성(Property) == 맴버변수 cnt = 0
        init: function()        // 속성에 function() 키워드가 존자해면 매서드(왼쪽)
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
    obj.babo();
})(jQuery);     // 웹페이지가 열릴때 곧바로 실행( load 실행)
