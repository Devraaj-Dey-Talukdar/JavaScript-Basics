// for(let i=0; i<10; i++){//i++ is the same as i=i+1 and i+=1 . ++i is the same as i=i+1. i-- is the same as i=i-1 and i-=1.
//     console.log(i); //Output: 0,1,2,3,4,5,6,7,8,9
//     // if let i =1 then i=2 and i=3 and i=4 and i=5 and i=6 and i=7 and i=8 and i=9 and i=10.
//     //mostly in cases of arrays we take i = 0 as the starting point.
// }

const myState = ["West-Bengal",
    "NewYork",
    "California",
    "Bangalore",
    1947,
    "Texas",
    "Kolkata"];

// for(let i=0; i < myState.length; i++){
//     if(typeof myState[i] !== 'string')//typeof is used to check the type of the variable.
//         continue;//continue is used to skip the rest of the code and go to the next iteration.

//     console.log(myState[i]);//Output: West-Bengal, NewYork, California, Bangalore, 1947, Texas, Kolkata 
    
// }    

let i = 0;

// while(i <= myState.length-1){
//     //i++; //this statement should be below the console.log statement.
//     console.log(myState[i]);//Output: West-Bengal, NewYork, California, Bangalore, 1947, Texas, Kolkata
//     i++;
// }

do{
    console.log(myState[i]);
    i = i+1;
}while( i < myState.length)