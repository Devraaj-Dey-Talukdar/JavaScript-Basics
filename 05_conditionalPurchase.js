// User is allowed to purchase when :
// - the user is logged in 
// - email is verified
// - Card information is valid
// - If any one is missing , stop the purchase process

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfoValid = true;

// if(isLoggedIn==true && isEmailVerified==true && cardInfoValid==true){
//     console.log("User is allowed to purchase")
// }
// else{
//     console.log("The user is not allowed to purchase");
// }

if(isLoggedIn){
    console.log("You have successfully logged in");
    if(isEmailVerified){
        console.log("You have successfully verified your email");
        if(cardInfoValid){
            console.log("Your card info is valid");
            console.log("You are allowed to purchase");
        }
    }
}
else{
    console.log("You are not allowed to purchase");
}