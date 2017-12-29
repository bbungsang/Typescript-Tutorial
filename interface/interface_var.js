var todos;
todos = [
    { id: 1, content: 'typescript', completed: false }
];
// 인터페이스를 사용하여 함수 파라미터의 타입을 선언할 수 있다.
// 해당 함수에는 함수 파라미터의 타입으로 지정한 인터페이스를 준수하는 인수를 전달해야 함
// 함수 객체 전달시 복잡한 매개변수 체크가 필요없어서 매우 유용
function addTodo(todo) {
    console.log(todo.content);
    // todo.id = '문자열'; -> 에러 발생
}
var newTodo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
/*
* 타입 확인이 느슨할 수록 언어의 유연성은 증가하지만 신뢰성은 떨어진다.
* [정적 타입 확인(Static Type Checking)은 장점]
* - 에러에 자동으로, 빠르고 정확하 대처함
* - 디버깅으로 보내는 시간을 줄여줌
* - 유지보수가 쉬움
* - 프로그램 실행 속도를 향상시킴
* */ 
