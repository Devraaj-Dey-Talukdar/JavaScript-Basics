function init (){
    var firstName = "Devraaj";
    console.log("I am Doraemon");
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
}

var value = init();

value();//Closure in javascript
//Closure is a feature in javascript which is used to create a private scope for a function
// and to access the variables in that scope from outside the function scope using the function reference.

function doAddition (x){
    return function (y){
        return x + y;
    }
}

var add5 = doAddition(5);//x = 5
console.log(add5(10)); //This will work because of closure
//Output: 15

console.log(doAddition(10)(10));//This is working because of closure
//Output: 20

doAddition()()()//Curring
//Currying is a technique to convert a function with multiple parameters into a function with a single parameter.