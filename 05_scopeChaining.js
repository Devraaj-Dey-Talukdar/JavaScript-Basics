var namee = "Devraaj";
console.log("Line 2 ,", namee);//Output: Devraaj

function sayMyName() {
    var name = "DEV";
    console.log("Line 6 ,", name);
    sayName2();
    function sayName2() {
        console.log("Line 9 ,", name);//Output: DEV
    }
}

sayMyName();//Output: DEV

//Scope chaining is a feature of javascript that allows us to access the variables defined in the parent scope. 
// if we have a variable defined in the parent scope and we want to access it in the child scope then we can use the scope chaining.