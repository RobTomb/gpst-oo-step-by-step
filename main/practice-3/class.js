// Write your code here
module.exports = class Class {
	constructor(id){
		this.id = id;
		this.students = [];
	}

	hasStudent(student){
		return this.students.includes(student);
	}

	appendMember(student){
		this.students.push(student);
	}

	assignLeader(student){
		let feadback = '';
		if(this.hasStudent(student)){
			this.leader = student.name;
			feadback = 'Assign team leader successfully.';
		}
		else
			feadback = 'It is not one of us.';
		console.log(feadback);
	}
}