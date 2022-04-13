var testArray = [2, 4, 6, 8, 10, 12, 15];

//console.log(testArray.fill(0));//Output: [ 0, 0, 0, 0, 0, 0, 0 ]

console.log(testArray.fill("d", 2, 3));
//fill() fills all the elements of an array from a start index to an end index with a static value.

const myNumber = [23, 34, 56, 78, 90, 12, 34, 56, 78, 90];

var result = myNumber.filter((num) => num != 12);
console.log(result);//Output: [ 23, 34, 56, 78, 90, 34, 56, 78, 90 ]
//filter() creates a new array with all elements that pass the test implemented by the provided function.

var user = ["devraaj", "priyanka", "sourav", "Jack", "Peter Parker"];
console.log(user.slice(1, 4));//Output: [ 'priyanka', 'sourav', 'Jack' ]
//slice() creates a new array with a portion of the elements of the original array.
//slice() does not alter the original array.
//Inclusive of the start index and exclusive of the end index.
//Inclusive means the start index is included and exclusive means the end index is excluded.

console.log(user.slice(1));//Output: [ 'priyanka', 'sourav', 'Jack', 'Peter Parker' ]

user.splice(1, 2, "MSD", "Jadeja")//Output: [ 'devraaj', 'MSD', 'Jadeja', 'Peter Parker' ]
console.log(user);
//splice() changes the contents of an array by removing existing elements and/or adding new elements.
//splice() returns the removed elements.

var nm = "Jadeja";
// console.log(nm.toUpperCase());//Output: JADEJA
// console.log(nm.charAt(2));
// to reverse a string in javascript 
