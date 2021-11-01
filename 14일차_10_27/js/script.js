// alert('자바스크립트!!!! ')

// 함수
// 선언적함수
// 익명함수
// 즉시실행함수(즉시표현식)
// 제이쿼리 라이브러리 실행
// 객체(Object)


/*
HTML 웹표준 HTML5
Javascript 스크립트 표준 : 이크마(ECMA) 스크립트 Script 5, 6, 7, 8
ECMA Script 5 : ES5 - var 키워드
ECMA Script 6 : ES6 - let, const 키워드
타입스크립트(Type Script) : 변수 사용을 권장 

// 선언적함수(이름있는함수)
function 자바스크립트 정해진 키워드
var 키워드
함수이름 = 식별자

함수이름()   실행가능
{}  중괄호는 함수실행 영역범위( 스코프 Scope )
function 함수이름(){
    var a=0;
}
함수이름() 실행가능

이름있는 함수는 호이스팅(변수또는 함수이름이 맨위 상단으로 끌어 올려져서 실행한다.)


// 익명함수(이름없는함수)
변수(); //함수호출실행 불가능 오류
var 변수 = function(){

}
변수(); //함수호출실행 항상 아래에서만 가능


즉시실행함수(IIFE)==즉시표현함수식(IIFE)
(function(){

})();



*/

//babo(190); 
function babo(z){  //z 매개변수

    alert('선억적함수 실행!!!! ' + z );
}
//babo(190); //아규먼트



//babo2(999); //실행 오류
//var babo2 = function(z){
//  alert('익명함수 실행!!!! ' + z );
//}
//babo2(999);



// (function(z,y){
//     alert('즉시실행함수!!!! ' + (z+y));
// })(1000, 900);


(function($){
    var txt = '<mark>제이쿼리 타이틀 입니다.</mark>';

    //.html() 메서드(함수)
    // $('.title').html('<mark>제이쿼리 타이틀 입니다.</mark>');
    // $('.title').text('<mark>제이쿼리 타이틀 입니다.</mark>');

    // $('.title').text(txt);

        txt += '추가된 변수 누적 내용!@!';

    $('.title').html(txt);

    //객체 
    var starbucks = {
        init: function(){  //메서드(함수)
            this.header();
            this.section1();
        },
        header: function(){
            var cnt = 0;
                cnt=50;
        },
        section1: function(){
            var cnt = 0;
                cnt=100;
        }
    }
    starbucks.init();

})(jQuery);
