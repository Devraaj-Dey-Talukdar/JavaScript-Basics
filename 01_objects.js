var User = function (firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstname = function () {
    console.log(`Firstname is: ${this.firstName}`);
};

var devraaj = new User("devraaj", 2);
console.log(devraaj);
devraaj.getCourseCount();// 2
// devraaj.getFirstname();// devraaj
if(devraaj.hasOwnProperty(firstName)){
    devraaj.getFirstname();
}
// Output: User { firstName: 'devraaj', courseCount: 2 }

var sam = new User("Sam", 1);
console.log(sam);
sam.getCourseCount();// 1
sam.getFirstname();// Sam
// Output: User { firstName: 'Sam', courseCount: 1 }

//new keyword is used to create an object instance