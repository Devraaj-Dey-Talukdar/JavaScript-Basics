var isEven = (element) => { 
    // if(element % 2 === 0){
    //     return true;
    // }
    // return false;
    return element % 2 === 0;//returns true if the element is even and false if the element is odd.
}

console.log(isEven(4));//Output: true
//console.log(isEven(5));//Output: false

var result = [2 , 4 , 6 , 8 , 10].every(isEven);
//every() returns true if all elements in the array pass the test implemented by the provided function.
console.log(result);//Output: true as all elements in the array are even.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array use this for indepth understanding.

var result1 = [2 , 4 , 9 , 8 , 10].every((e) => (e % 2 === 0));
console.log(result1);//Output: false as 9 is not even.