<?

$irum = $_POST["irum"];
$tel = $_POST["tel"];

// 데이터베이스 사용권한(계정)
// 데이터베이스 저장(input)
// 데이터베이스 가져오기(select)

// 응답
// echo $irum."님 성공적으로 저장되었습니다.";

// $array = Array() 배열 생성자 함수
$array = Array(
    "이름" => $irum,
    "연락처" => $tel,
    "소속" => $job
); 
// JSON 데이터 형식 인코딩 Encode : 데이터 형식을 변환 한다.
$json = json_encode($array, JSON_UNESCAPED_UNICODE);

// JSON 파일 내보내기(저장)
// 파일명: data폴더 안에 저장 : member.json
$file = file_put_contents('./data/member.json', $json);

// JSON 데이터로 응답
echo $json;

?>