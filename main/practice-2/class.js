// Write your code here
module.exports = class Class {
	constructor(id){
		this.id = id;
	}
	assignLeader(student){
		this.leader = student;
		student.introduce = ()=>{
			return `${student.basicIntroduce()} I am a Student. I am Leader of Class ${student.clazz.id}.`;
		}
	}
}