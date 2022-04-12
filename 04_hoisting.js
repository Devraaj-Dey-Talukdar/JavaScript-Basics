tipper("5"); // can be written anywhere in the code

function tipper (a){
    var bill = parseInt(a);//parseInt() converts string to integer
    console.log(bill + 5);
}



var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("100"); //Should be below the var bigTipper = function(a)

//function declarations are scanned and made available to the global scope.
//variable declarations are scanned and made Undefined.

// var nameI = "Devraaj";
// console.log(nameI); // Output: Devraaj

// console.log(nameI); // Output: undefined
// var nameI = "Devraaj";

//undefined is completely different from an error.

console.log(nameI);// output: undefined
var nameI = "Devraaj";

function myName(){
    nameI = "Sourav";
    console.log(nameI);
}
myName();//Output: Sourav

console.log(nameI); //Output: Devraaj