const Person = require('./person');

module.exports = class Teacher extends Person{
	constructor(name , age , clazzes){
		super(name , age);
		this.clazzes = clazzes;
	}

	introduce(){
		let info = `${this.basicIntroduce()} I am a Teacher.`;

		if(this.clazzes.length === 0)
			return info + ' I teach No Class.';

		info += ' I teach Class ';
		let idList = this.clazzes.map( (item)=>{
			return item.id;
		})
		
		info += idList.join(',') + '.' ;
		return info;
	}
}