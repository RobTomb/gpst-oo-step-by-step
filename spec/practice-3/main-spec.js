const Person = require('../../main/practice-3/person');
const Student = require('../../main/practice-3/student');
const Teacher = require('../../main/practice-3/teacher');
const Class = require('../../main/practice-3/class');


describe("Teacher", () => {

  it("should have field name, age and klass", () => {
    let clazz1 = new Class(2);
    let clazz2 = new Class(3);
    let teacher = new Teacher("Joun", 21, [clazz1, clazz2]);
    expect(teacher.name).toBe("Joun");
    expect(teacher.age).toBe(21);
    expect(teacher.clazzes).toEqual([clazz1, clazz2]);
  });

  it("should overwrite Person introduce and show all classes this teacher teaches, whe" +
      "n init two classed to this teacher",
  () => {
    let clazz1 = new Class(2);
    let clazz2 = new Class(3);
    let teacher = new Teacher("Joun", 21, [clazz1, clazz2]);

    let introduce = teacher.introduce();

    expect(introduce).toBe("My name is Joun. I am 21 years old. I am a Teacher. I teach Class 2,3.");

  });

  it("should show no class this teacher teaches info, when there is no class assgin to" +
      " this teacher",
  () => {
    let teacher = new Teacher("Joun", 21, []);

    let introduce = teacher.introduce();

    expect(introduce).toBe("My name is Joun. I am 21 years old. I am a Teacher. I teach No Class.");

  });

  it("should return false, when student hasn't been appended this student to this clas" +
      "s which teacher teaches",
  () => {
    let clazz1 = new Class(2);
    let clazz2 = new Class(3);
    let student = new Student("Tom", 21, clazz1);
    let teacher = new Teacher("Joun", 21, [clazz1, clazz2]);

    let isTeaching = teacher.isTeaching(student);

    expect(isTeaching).toBe(false);

  });

  it("should return true, when student has been appended this student to this class wh" +
      "ich teacher teaches",
  () => {
    let clazz1 = new Class(2);
    let clazz2 = new Class(3);
    let student = new Student("Tom", 21, clazz1);
    clazz1.appendMember(student);
    let teacher = new Teacher("Joun", 21, [clazz1, clazz2]);

    let isTeaching = teacher.isTeaching(student);

    expect(isTeaching).toBe(true);

  });

});
