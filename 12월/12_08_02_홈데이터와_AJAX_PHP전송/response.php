<?

$irum = $_POST["irum"];
$tel = $_POST["tel"];
$job = $_POST["job"];

// 데이터베이스 사용권한(계정)
// 데이터베이스 저장(input)
// 데이터베이스 가져오기(select)

// 응답
echo $irum."님 성공적으로 저장되었습니다.";
echo "이름 : ".$irum;
echo "연락처 : ".$tel;
echo "소속 : ".$job;
?>