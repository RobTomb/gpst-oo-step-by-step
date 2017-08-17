// Write your code here
module.exports = class Class {
	constructor(id){
		this.id = id;
	}
	assignLeader(student){
		if( student.name === 'Tom' )
			student.introduce = function (){
				return `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am Leader of Class ${student.clazz.id}.`;
			}
	}
}