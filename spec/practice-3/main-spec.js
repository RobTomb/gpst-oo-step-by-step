const Person = require('../../main/practice-3/person');
const Student = require('../../main/practice-3/student');
const Teacher = require('../../main/practice-3/teacher');
const Class = require('../../main/practice-3/class');




describe("Class", () => {

  it("should call teacher's addended member event, when a student is appended to teach" +
      "er's own classes",
  () => {
    let clazz = new Class(2);
    let student = new Student("Jerry", 21, clazz);
    let teacher = new Teacher("Tom", 21, [clazz]);
    spyOn(teacher, 'notifyStudentAppended');
    clazz.appendMember(student);
    expect(teacher.notifyStudentAppended).toHaveBeenCalledWith("Jerry has joined Class 2");
  });

  it("should call teacher's assign class leader event, when a student is assigned to b" +
      "e a leader in teacher's own classes",
  () => {
    let clazz = new Class(2);
    let student = new Student("Jerry", 21, clazz);
    let teacher = new Teacher("Tom", 21, [clazz]);
    spyOn(teacher, 'notifyLeaderAssigned');
    spyOn(teacher, 'notifyStudentAppended');
    clazz.appendMember(student);
    clazz.assignLeader(student);
    expect(teacher.notifyLeaderAssigned).toHaveBeenCalledWith("Jerry become Leader of Class 2")
  });

});
