// 인터페이스 = 클래스 - 클래스의 구현부, 어떤 객체가 어떤 프로퍼티 혹은 메소드를 가진다고 선언하는 것
// 일반적으로 타입 체크를 위해 사용, 인터페이스에 프로퍼티 또는 메소드의 구현을 강제하여 일관성을 유지할 수 있도록 함
// 직접 인스턴스를 생성할 수 없음
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

let todos: Todo[];

todos = [
  { id: 1, content: 'typescript', completed: false }
];

// 인터페이스를 사용하여 함수 파라미터의 타입을 선언할 수 있다.
// 해당 함수에는 함수 파라미터의 타입으로 지정한 인터페이스를 준수하는 인수를 전달해야 함
// 함수 객체 전달시 복잡한 매개변수 체크가 필요없어서 매우 유용
function addTodo(todo: Todo) {
  console.log(todo.content)
}

const newTodo: Todo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo)
