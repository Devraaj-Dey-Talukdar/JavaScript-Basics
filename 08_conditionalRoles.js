// TODO : Create an application with following roles:
// 1. Admin - gets full access to the application
// 2. subadmin - gets to create/delete courses
// 3. testprep - gets to create/delete tests
// 4. user - gets to consume the content
// Using Switch case

var user = "testprep";

switch (user) {
    case "admin":
        console.log("gets full access to the application");
        break;
        case "subadmin":
        console.log("gets to create/delete courses");
        break;
        case "testprep":
        console.log("gets to create/delete tests");
        break;
        case "user":
        console.log("gets to consume the content");
        break;

    default:
        console.log("Invalid user");
        break;
}

//Falsey values -- 
// 0 - Zero
// '' - Empty String
// null - Null
// undefined - Undefined
// NaN - Not a Number

// var values = "2";
// if(2 == values) // This evaluates to true because 2 is equal to 2
// console.log("True");
// else{
//     console.log("False");
// }

// if(2 === values){ // In this case it is not true because the type of the values is different
//     console.log("True");
// }
// else{
//     console.log("False"); 
// }
// So '==' is used to compare the values and '===' is used to compare the values and the type