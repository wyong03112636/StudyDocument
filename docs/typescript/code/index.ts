interface Person {
  firstName: string;
  lastName: string
}
function feeter(person: Person) {
  return person.firstName + person.lastName
}
class Student {
  fullName: string;
  constructor(public firstName, public lastName) {
    this.fullName = firstName + lastName
  }
}
let student = new Student('wang', 'yong');