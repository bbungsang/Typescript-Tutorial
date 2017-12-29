var todos;
todos = [
    { id: 1, content: 'typescript', completed: false }
];
// 인터페이스를 사용하여 함수 파라미터의 타입을 선언할 수 있다.
// 해당 함수에는 함수 파라미터의 타입으로 지정한 인터페이스를 준수하는 인수를 전달해야 함
// 함수 객체 전달시 복잡한 매개변수 체크가 필요없어서 매우 유용
function addTodo(todo) {
    console.log(todo.content);
}
var newTodo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
