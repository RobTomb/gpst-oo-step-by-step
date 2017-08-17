const Person = require('./person');

module.exports = class Worker extends Person{
	constructor(name,age,klass){
		super(name,age);
	}
	introduce(){
		return `${this.basicIntroduce()} I am a ${Worker.name}. I have a job.`;
	}
}