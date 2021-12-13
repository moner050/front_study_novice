(function($)
{
    // 전송스토리
    // 폼 화면 입력상자에 데이터 입력
    // 전송버튼 클릭하면
    // ajax post 전송방식으로 웹서버 응답파일 response.php 에 
    // 폼 입력 데이터를 전송한다.
    // 그러면 서버사이드(response.php)가 전송데이터를 받아서
    // 가공 처리하고
    // 다시 응답 내용을 클라이언트(client)에게 보내준다.

    $('.submit-btn').on({
        click: function(event)   // 버튼의 고유기능(전송기능)을 제거
        {
            event.preventDefault();

            // 입력데이터 변수에 대입
            // JS 방식
            // var irum = documuent.querySelector('#irum').value;
            // var irum = documuent.getElementById('irum').value;

            // jquery 방식
            var firum = $('#irum').val();
            var ftel = $('#tel').val();
            var fjob = $('#job').val();
            
            $.ajax({
                url:'./response.php',
                type:'POST',
                data:{
                    // 폼데이터 : 입력데이터
                    irum: firum,
                    tel : ftel,
                    job : fjob
                },
                success: function(result)
                {
                    // console.log("JSON 데이터", result);
                    // console.log("문자데이터", JSON.stringify(result) );  // JSON -> 문자열
                    // console.log("JSON데이터", JSON.parse(result) );      // 문자열 -> JSON
                    var data = JSON.parse(result);
                    console.log(data);
                },
                error: function(err)
                {
                    console.log("Error : "+err);
                }
            });
            alert("클릭!");
        }
    })
})(jQuery);
