//Allow user to access the course if he is :
// - logged in from email
// - logged in from GitHub
// - logged in from Google
// - logged in from Facebook

var isLoggedInFromEmail = false;
var isLoggedInfromGitHub = true;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = false;

if(isLoggedInFromEmail || isLoggedInfromGitHub || isLoggedInFromGoogle || isLoggedInFromFacebook){
    console.log("You are allowed to access the course");
}else{
    console.log("You are not allowed to access the course");
}