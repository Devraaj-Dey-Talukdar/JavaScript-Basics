var countries = ["USA", "Germany", "UK", "France", "Russia"];

var states = new Array ("West-Bengal", "Maharashtra", "Tamil Nadu", "Kerala", "Karnataka");

console.log(countries);//Output: [ 'USA', 'Germany', 'UK', 'France', 'Russia' ]
console.log(states[0]);//Output: West-Bengal
console.log(states.length);//Output: 5

states[4] = "Assam"; //Inserting a new element in the array

states.push("Telangana");//adds an element to the end of the array
console.log(states);//Output: [ 'West-Bengal', 'Maharashtra', 'Tamil Nadu', 'Kerala', 'Karnataka', 'Assam', 'Telangana' ]

var user = new Array ("Devraaj", "Priyanka", "Sourav", 34 , 7);
user.pop();//removes the last element of the array
console.log(user);//Output: [ 'Devraaj', 'Priyanka', 'Sourav', 34 ]
user.pop();
console.log(user);//Output: [ 'Devraaj', 'Priyanka', 34 ]
user.shift();//removes the first element of the array
console.log(user);//Output: [ 'Priyanka', 34 ]
user.unshift("Sourav");//adds an element to the beginning of the array
console.log(user);//Output: [ 'Sourav', 'Priyanka', 34 ]
//it is not recommed to use shift and unshift for arrays. :)

console.log(user.indexOf("Sourav"));//Output: 0
console.log(user.indexOf(34));//Output: 2
//indexOf() returns the index of the first element in the array that is equal to the specified value.

console.log(user.indexOf("Devraaj"));//Output: -1
//indexOf() returns -1 if the value is not found.

console.log(Array.from("Devraaj"));//Output: [ 'D', 'e', 'v', 'r', 'a', 'a', 'j' ]
//Array.from() converts a string to an array.