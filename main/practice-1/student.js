const Person = require('./person');

module.exports = class Student extends Person{
	constructor(name,age,klass){
		super(name,age);
		this.klass = klass;
	}
	introduce(){
		return `${this.basicIntroduce()} I am a ${Student.name}. I am at Class ${this.klass}.`;
	}

}