(function($)
{
    var cnt = 0;    // 누적 변수

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
            cnt++;
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
                    // 로컬 스토리지 저장 : 키와 키값 한쌍으로 이루어진다.
                    var data = JSON.parse(result);
                    var txt  = JSON.stringify(data.이름 +', '+ data.연락처 +', '+ data.소속);

                    var txt2 = firum + ', ' + ftel + ', ' + fjob; 

                    // 키값엔 문자열만 들어갈수 있음
                    // localStorage.setItem(키(key), 키값(value));
                    localStorage.setItem(cnt, txt2);
                    $('#irum').val('');
                    $('#tel').val('');
                    $('#job').val('');

                    // 로컬 스토레이지 삭제
                    // 삭제할 키를 써주면 된다.
                    localStorage.removeItem('1')
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


    // console.log("JSON 데이터", result);
    // console.log("문자데이터", JSON.stringify(result) );  // JSON -> 문자열
    // console.log("JSON데이터", JSON.parse(result) );      // 문자열 -> JSON
    // var txt = JSON.parse(result);
    // var str = JSON.stringify(txt);       // json 객체 => 문자열

    // console.log(txt['소속']);
    // console.log(txt['이름']);
    // console.log(txt['연락처']);

    // var data = JSON.parse(result);
    // console.log(data);
    // console.log(data['이름']);
    // console.log(data.이름);
    // console.log(data['연락처']);
    // console.log(data.연락처);
    // console.log(data['소속']);
    // console.log(data.소속);

    // console.log('JSON데이터 result : ', result);
    // console.log('JSON데이터 txt : ', txt);
    // console.log('JSON데이터 str : ', str);
