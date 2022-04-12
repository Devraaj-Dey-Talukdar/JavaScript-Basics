/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

function getUserRole(name , role){
    switch (role) {
        case "admin":
            return `${name} is an admin with all access`;
            break;//this break is not required
            case "subadmin":
                return `${name} is a subadmin and can create and delete courses`;
            break;//this break is not required
            case "testprep":
                return `${name} is a test prep and can create and delete tests`;
            break;// this break is not required
            case "user":
                return`${name} is a user and can consume all content`;
    
        default:
            return `${name} is a trial user`;
            break;//this break is not required
    }
}

// getUserRole("Devraaj", "user");
console.log(getUserRole("Devraaj", "testprep"));
//or
var getRole = getUserRole("Devraaj", "admin");
console.log(getRole);
// This is a part of bit functional programming.
var roleOfUser = function getUserRole(name , role){ //This is a unique javascript feature :)
    switch (role) {
        case "admin":
            return `${name} is an admin with all access`;
            break;//this break is not required
            case "subadmin":
                return `${name} is a subadmin and can create and delete courses`;
            break;//this break is not required
            case "testprep":
                return `${name} is a test prep and can create and delete tests`;
            break;// this break is not required
            case "user":
                return`${name} is a user and can consume all content`;
    
        default:
            return `${name} is a trial user`;
            break;//this break is not required
    }
}
console.log(roleOfUser("Devraaj", "subadmin"));