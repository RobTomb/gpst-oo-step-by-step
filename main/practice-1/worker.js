const Person = require('./person');

module.exports = class Worker extends Person{
	constructor(name,age,klass){
		super(name,age);
	}
	introduce(){
		return `My name is ${this.name}. I am ${this.age} years old. I am a ${Worker.name}. I have a job.`;
	}
}