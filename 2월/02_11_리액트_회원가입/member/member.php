<?PHP
    
    // 데이터베이스 헤더영역 - 데이터베이스 이름, 비밀번호, (인증) 데이터베이스 열기
    $serverName = 'localhost';
    $userName = 'moner050';
    $userPwd = 'qwer1234';
    $dbName = 'moner050';

    $connector = mysqli_connect($serverName,$userName,$userPwd,$dbName);
    mysqli_set_character($connector, 'utf8');

    if(!$connector)
    {
        die("접속 실패...");
    }
    else
    {
        echo "접속 성공";
    }

    // 구현부

    $num = $_POST['num'];
    $id = $_POST['id'];
    $pwd = $_POST['pwd'];
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];

    // 데이터베이스에 저장(insert) sql문
    




    // 데이터베이스 닫기

?>