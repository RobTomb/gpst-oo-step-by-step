const Person = require('./person');

module.exports = class Teacher extends Person{
	constructor(name , age , clazzes){
		super(name , age);
		this.clazzes = clazzes;
	}
	introduce(){
		let info = `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. `;
		if( this.clazzes.length === 0 )
			info += `I teach No Class.`;
		else
			info += `I teach Class ${this.clazzes[0].id},${this.clazzes[1].id}.`; 
		return info;
	}
	isTeaching(student){
		return this.clazzes.includes(student.clazz) ? true : false;
	}
}