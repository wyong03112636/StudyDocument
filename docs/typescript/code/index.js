"use strict";
function feeter(person) {
    return person.firstName + person.lastName;
}
var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return Student;
}());
var student = new Student('wang', 'yong');
