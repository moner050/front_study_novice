(function($)
{
    var delItem = null;
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
        delItem = $(this).val();
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