// 변수: 변수의 역할
class Student {
  fullname: string;
  constructor(public firstname, public middleinitial, public lastname) {
    this.fullname = firstname + " " + middleinitial + " " + lastname;
  }
}

interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstname + " " + person.lastname;
}

var user = new Student("jane", "M", "User");

document.body.innerHTML = greeter(user)