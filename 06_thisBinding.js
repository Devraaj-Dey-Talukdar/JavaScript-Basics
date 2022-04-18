const Devraaj = {
    firstName: "Devraaj",
    lastName: "Dey Talukdar",
    role : "Admin",
    courseCount : 4,
    getInfo : function(){
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            Role : ${this.role}
            Course Count : ${this.courseCount}
        `)
    }
};

const dj = {
    firstName: "Dwayne",
    lastName: "Johnson",
    //petName: "The Rock",
    role : "Sub-Admin",
    courseCount : 4,
}

Devraaj.getInfo.bind(dj)();
//or
var djinfo = Devraaj.getInfo.bind(dj);
djinfo();//Output: Dwayne Johnson is Sub-Admin and has 4 courses in total.
//or
Devraaj.getInfo.call(dj);

//Bind is used to create a new function with the this keyword bound to the object passed as the first argument.
//Call is used to call a function with the this keyword bound to the object passed as the first argument.