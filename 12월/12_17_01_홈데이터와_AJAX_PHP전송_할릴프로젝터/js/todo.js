(function($)
{
    // 삭제할 키를 보관하는 배열
    var delItem = [];
    $('.submit-btn').on({
        click: function(event)
        {
            event.preventDefault();
            var fromSubject = $('#subject').val();
            var fromContent = $('#content').val();
            console.log()
            $.ajax({
                url: './response.php',
                type: 'POST',
                data:{
                    subject: fromSubject,
                    content: fromContent
                },
                success: function(result)
                {
                    var jsonData = JSON.parse(result);
                    localStorage.setItem(jsonData.제목, jsonData.내용);
                    // 할일 목록 출력 함수 호출
                    list();
                },
                error: function(err)
                {
                    console.log('AJAX 오류!!',err);
                }
            });
        }
    });
    function list()
    {
        var keySubject = null;
        var keyContent = null;
        var txt = '';           // 출력정보 저장

        // 키, 키값
        for(i = 0; i <localStorage.length; i++)
        {
            keySubject = localStorage.key(i);
            keyContent = localStorage.getItem(localStorage.key(i));
            txt += "<tr>";
            txt += '<td><input type="checkbox" class="chk" value="'+ keySubject +'"></td>';
            txt += '<td><p>'+ keySubject +'</p></td>';
            txt += '<td><p>'+ keyContent +'</p></td>';
            txt += "</tr>";
        } 
        // 바인딩
        $('#listBox tbody').html(txt);
    }
    // 할일 목록 출력 함수 호출
    list();

    // 체크상자 클릭 이벤트
    $(document).on('click', '.chk', function()
    {
        // 단 체크한 상자의 값만 푸시(밀어넣기) : 체크상자의 체크 유무 확인 해야한다.
        //체크 해제한 상자의값은 배열에서 삭제하기. 
        // 현제 클릭한 체크상자가 체크한 상태이면(true)
        if( $(this).is(':checked') )
        {
            // 배열이랑 체크상자랑 두가지를 확인 해야한다.
            delItem.push( $(this).val() );
        }
        else
        {
            // 체크가 해제되면 배열안에 해제된 값들은 배열 안에서 삭제한다.
            // 첫번째 배열 한개를 삭제하겠다.
            // delItem.splice(삭제할 인덱스번호,1); //첫번째 배열 1개를 삭제하겠다
            // 체크 해제한 상자의 value 값(키)을 배열 안에서 찾아서 그 인덱스번호를 알아내고
            // 그 인덱스 번호를 배열에서 이용하여 내용을 삭제한다.
            for(i in delItem)
            {
                // 체크 해제한 키값
                if( $(this).val() == delItem[i] )
                {   // 체크 해제한 값과 배열값 비교 찾으면
                    console.log( $(this).val() , '찾았다', delItem[i], '인덱스번호 : ' , i);

                    delItem.splice(i,1);

                    console.log( delIte0m );
                }
            }
        }

        console.log(delItem)
        console.log( $(this).is(":checked") );           // 배열값 확인
    });
    
    // 삭제버튼 클릭 이벤트
    $('.delete-btn').on({
        click: function()
        {
            localStorage.removeItem(delItem);
            list();
        }
    });

})(jQuery);