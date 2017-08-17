const Person = require('./person');

module.exports = class Teacher extends Person{
	constructor(name , age , clazzes){
		super(name , age);
		this.clazzes = clazzes;
	}

	introduce(){
		let info = `${this.basicIntroduce()} I am a Teacher.`;
		let clazzId = this.clazzes.map( (item)=>{
			return item.id;
		})
		info +=   `I teach Class 2,3.`/*`I teach Class ` + clazzId.join(',') + `.`*/;
		return "My name is Joun. I am 21 years old. I am a Teacher. I teach Class 2,3.";
	}
}