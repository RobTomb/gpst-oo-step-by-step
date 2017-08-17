const Person = require('./person');

module.exports = class Teacher extends Person{
	constructor(name , age , clazzes){
		super(name , age);
		this.clazzes = clazzes;
	}

	isTeaching(student){
		let flag = false;
		this.clazzes.forEach( (item)=>{
			if(item.hasStudent(student))
				flag = true;
		})

		return flag;
	}
	
	notifyStudentAppended(){
		
	}

	introduce(){
		let info = `${this.basicIntroduce()} I am a Teacher.`;

		if(this.clazzes.length === 0)
			return info + ' I teach No Class.';

		let clazzId = this.clazzes.map( (item)=>{
			return item.id;
		})

		info += ` I teach Class ` + clazzId.join(',') + `.`;
		return  info;
	}
}