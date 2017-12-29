// 변수: 변수의 역할
var Student = /** @class */ (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = new Student("jane", "M", "User");
document.body.innerHTML = greeter(user);
