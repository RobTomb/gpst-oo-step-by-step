const Person = require('./person');

module.exports = class Student extends Person{
	constructor(name , age , clazz){
		super(name , age);
		this.clazz = clazz;
	}

	introduce(){
		let info = `${this.basicIntroduce()} I am a Student.`;
		let otherInfo = '';

		if(this.clazz.leader === this.name)
			otherInfo += ` I am Leader of Class ${this.clazz.id}.`
		else if(this.clazz.hasStudent(this))
			otherInfo = ` I am at Class ${this.clazz.id}.`;
		else	
			otherInfo = ` I haven't been allowed to join Class.`;
		
		return info + otherInfo;
	}
}