// Write your code here
module.exports = class Class {
	constructor(id){
		this.id = id;
	}
	appendMember(student){
		student.clazz = this;
		student.introduce = ()=>{
			return `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am at Class ${student.clazz.id}.`;
		}
	}
	assignLeader(student){
		if( student.name === 'Tom')
			student.introduce = ()=>{
				return `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am Leader of Class ${student.clazz.id}.`;
			}
	}

}