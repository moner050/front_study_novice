(function($)
{
    // 삭제할 키를 보관하는 배열
    var delItem = [];
    var chkCnt = 0;
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
    // 동적으로 추가된 체크상자. 그래서 도큐먼트 이벤트 추가해야 클릭 대상이 됌.
    $(document).on('change', '.chk', function()
    {
        // 체크를 한개라도 해제하면 
        // allChk가 해제되어야 한다.
        // 마지막 남은 체크상자 한개까지 체크하면 모든 체크상자 체크 된 상태이므로
        // allChk가 체크되어야 한다.
        chkCnt = 0; // 변수초기화
        $('.chk').each(function(i)
        {
            if($('.chk').eq(i).is(':checked'))
            {
                chkCnt++;  
            }
                        // 모두 체크된 경우
            if(chkCnt == $('.chk').length)
            {
                $('.allChk').prop('checked', true);
            }
            else    // 단 한개라도 체크가 안되어 있다면
            {   
                $('.allChk').prop('checked', false);        // allChk는 해제
            }
        });

        // 모두 체크된 경우
        // if(chkCnt == $('.chk').length)
        // {
        //     $('.allChk').prop('checked', true);
        // }
        // else    // 단 한개라도 체크가 안되어 있다면
        // {   
        //     $('.allChk').prop('checked', false);        // allChk는 해제
        // }


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
                    // console.log( $(this).val() , '찾았다', delItem[i], '인덱스번호 : ' , i);

                    delItem.splice(i,1);
                }
            }
        }

        console.log(delItem)
        // console.log( $(this).is(":checked") );           // 배열값 확인
    });
    
    // 삭제버튼 클릭 이벤트
    $('.delete-btn').on({
        click: function()
        {
            for(i of delItem)
            {
                localStorage.removeItem(i);
            }
            delItem = [];
            list();
        }
    });

    $('.allChk').on({
        change: function(event)
        {
            // 꼭 필요함. 낱개로 선택할 때 누적된 내용이 전체 선택할때 누적되어 들어간다.
            delItem = [];
            event.preventDefault();
            // 클릭하면 하단의 모든 체크상자 체크를 강제로 하게 한다.
            // $('.chk').prop('checked', true);
            // 클릭하면 하단의 모든 체크상자 체크를 강제로 해제하게 한다.
            // $('.chk').prop('checked', false);
            
            // 객체 요소를 배열처리 each();
            // 체크되면 모두 체크
            // if($(this).is(':checked'))
            // {
            //     for(i = 0; i<$('.chk').length; i++ )
            //     {
            //         $('.chk').eq(i).prop('checked', true);
            //     }
            // }
            // else    // 체크되면 모두 체크 해제
            // {
            //     for(i = 0; i<$('.chk').length; i++ )
            //     {
            //         $('.chk').eq(i).prop('checked', false);
            //     }
            // }

            if($(this).is(':checked'))
            {
                $('.chk').each(function(i)
                {
                    $('.chk').eq(i).prop('checked', true);
                    // 삭제할 전체 값 배열 저장
                    delItem.push( $('.chk').eq(i).val() );
                });
                // 배열에 체크상자 키값을 배열에 모두 저장

            }
            else
            {
                $('.chk').each(function(i)
                {
                    $('.chk').eq(i).prop('checked', false);
                    delItem = [];
                });
            }
            console.log(delItem);
            // $('.chk').each(function()
            // {
            //     $(this).prop('checked', true);
            // });

            // for(i = 0; i<$('.chk').length; i++ )
            // {
            //     $('.chk').eq(i).prop('checked', true);
            // }
        }
    });

})(jQuery);