// 인터페이스 = 클래스 - 클래스의 구현부, 어떤 객체가 어떤 프로퍼티 혹은 메소드를 가진다고 선언하는 것
interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

// 클래스 선언문의 implements 뒤에 인터페이스를 선언하면 해당 클래스는 지정된 인터페이스를 반드시 구현해야 함
// 인터페이스를 구현하는 클래스의 일관성을 유지할 수 있는 장점이 있음
class Todo implements ITodo {
  constructor (
    public id: number,
    public content: string,
    public completed: boolean
  ){}
}

const todo = new Todo(1, 'Typescript', false);
const todo2 = new Todo(2, 'javascript', true);

console.log(todo);
console.log(todo2);


// 인터페이스는 멤버 변수뿐만 아니라 메소드도 포함할 수 있다.
// 인터페이스를 도입한 클래스는 정의한 멤버 변수와 메소드를 반드시 구현해야 한다.
interface IPerson {
  name: string;
  sayHello(): void;
}

class Person implements IPerson {
  constructor (public name: string){}

  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

function greeter(person: IPerson): void {
  person.sayHello();
}

const me = new Person('Kim');
greeter(me)