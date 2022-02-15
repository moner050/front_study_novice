<?PHP
    
    // http://moner050.dothome.co.kr/myadmin/
    // 서버: localhost
    // 데이터베이스: moner050
    // 테이블: member_starbucks
    // “리액트 스타벅스 회원관리”
    
    // 데이터베이스 헤더영역 - 데이터베이스 이름, 비밀번호, (인증) 데이터베이스 열기
    $serverName = 'localhost';
    $userName = 'moner050';
    $userPwd = 'Sjsmsanjfk0502!';
    $dbName = 'moner050';

    $connector = mysqli_connect($serverName,$userName,$userPwd,$dbName);
    mysqli_set_charset($connector, 'utf8');

    if( !$connector )
    {
        die("DB 서버에 접속 실패!");
    }

    // 변수 저장
    // 구현부

    $num = $_POST['num'];
    $id = $_POST['id'];
    $pwd = $_POST['pwd'];
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];

    // 데이터베이스 - 테이블에 저장하기 member_starbucks
    // SQL - INSERT(인설트)
    $sql = "insert into member_starbucks (num, id, pwd, name, tel, email) 
            values ( '$num', '$id', '$pwd', '$name', '$tel', '$email' )";
            mysqli_multi_query($connector, $sql);

    
    // 정보 검색 입력된 모든 데이터 가져오기 배열처리
    // SQL - SELECT(셀렉트)
    $sqlSelect = "select * from member_starbucks";
    $result = mysqli_query($connector, $sqlSelect);

    
    // 배열처리
    $arr = array();
    
    // 데이터가 존재하면 실행
    if( mysqli_num_rows( $result ) > 0 )
    {   // 배열을 가져와서 $row에 넣어라.
        while( $row = mysqli_fetch_array($result) )
        {   // 결과를 $arr 에 저장
            array_push($arr, array(
                "번호"      => $row['num'],
                "아이디"    => $row['id'],
                "비밀번호"  => $row['pwd'],
                "이름"      => $row['name'],
                "전화번호"  => $row['tel'],
                "이메일"    => $row['email']
            ));

        }
    }

    // JSON(객체) 데이터로 변환
    $json = json_encode( $arr, JSON_UNESCAPED_UNICODE );
            file_put_contents('./data/member.json', $json);


    echo $json;

    // 데이터베이스 닫기
    mysqli_close( $connector );


?>