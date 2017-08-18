// Write your code here
const Teacher = require('./teacher.js');
module.exports = class Class {
	constructor(id){
		this.id = id;
		this.students = [];
		this.teachers = [];
	}
	clazzAndTeacher(teachers){
		this.teachers = teachers;
	}
	hasStudent(student){
		return this.students.includes(student);
	}

	appendMember(student){
		this.students.push(student);
		this.teachers.forEach( (item)=>{
			if(item.clazzes.includes(this))
				item.notifyStudentAppended(`${student.name} has joined Class ${student.clazz.id}`);
		})
	}

	assignLeader(student){
		let feadback = '';
		if(this.hasStudent(student)){
			this.leader = student.name;
			feadback = 'Assign team leader successfully.';
			this.teachers.forEach( (item)=>{
			if(item.clazzes.includes(this))
				item.notifyLeaderAssigned(`${student.name} become Leader of Class ${student.clazz.id}`);
		})

		}
		else
			feadback = 'It is not one of us.';
		return feadback;
	}
}