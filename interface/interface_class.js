// 클래스 선언문의 implements 뒤에 인터페이스를 선언하면 해당 클래스는 지정된 인터페이스를 반드시 구현해야 함
// 인터페이스를 구현하는 클래스의 일관성을 유지할 수 있는 장점이 있음
var Todo = (function () {
    function Todo(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
    return Todo;
}());
var todo = new Todo(1, 'Typescript', false);
var todo2 = new Todo(2, 'javascript', true);
console.log(todo);
console.log(todo2);
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
function greeter(person) {
    person.sayHello();
}
var me = new Person('Kim');
greeter(me);
