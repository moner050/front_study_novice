<?

$subject = $_POST["subject"];
$content = $_POST["content"];

//db


// $array = Array() 배열 생성자 함수
$array = Array(
    "제목" => $subject,
    "내용" => $content
); 
// JSON 데이터 형식 인코딩 Encode : 데이터 형식을 변환 한다.
$response = json_encode($array, JSON_UNESCAPED_UNICODE);

// JSON 파일 내보내기(저장)
// 파일명: data폴더 안에 저장 : todo.json
$savefile = file_put_contents('./data/todo.json', $response);

// JSON 데이터로 응답
echo $response;

?>