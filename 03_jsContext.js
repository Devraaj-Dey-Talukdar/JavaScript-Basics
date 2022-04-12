// sayHello();

// function sayHello() {
//   console.log("Hello");
// }

if (2 === "2") {//This is a type coercion.
  console.log("This is true");
}

var myName = "hitesh";//This is a string :)
if (myName === window.myName) { // window.myName is a global variable in javascript and it is not defined in the if condition so it will be false
  console.log("This is again a true statement");
}
