var user = {
    firstName : "Devraaj",
    lastName : "Dey Talukdar",
    role : "Student",
    location : "West-Bengal",
    loginCount : "2",
    isFacebookSignedIn : true,
    courseList : [],
    buyCourse : function (){
        this.courseList.push(courseName);
    },
    courseCount : function(){
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
    }
};
console.log(user.courseCount());
user.buyCourse("JavaScript course");
console.log(user.courseCount());//Output: Devraaj is enrolled in 1 courses