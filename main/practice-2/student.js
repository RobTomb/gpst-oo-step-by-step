const Person = require('./person');

module.exports = class Student extends Person{
	constructor(name , age , clazz){
		super(name , age);
		this.clazz = clazz;
	}
	introduce(){
		return `My name is ${this.name}. I am ${this.age} years old. I am a ${Student.name}. I am at Class ${this.clazz.id}.`;
	}
}