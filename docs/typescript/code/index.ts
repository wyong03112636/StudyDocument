interface Person {
  firstName: string;
  lastName: string
}
function feeter(person: Person) {
  return person.firstName + person.lastName
}
class Student {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = firstName + lastName
  }
}
let student = new Student('wang', 'yong');
// aaaaaaa

