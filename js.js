const score = 85;

const grade = (score >= 90) ? 'A' :
              (score >= 80) ? 'B' :
              (score >= 70) ? 'C' :
              (score >= 60) ? 'D' : 'F';

console.log("Your grade is: ${grade}");
// o/p: "your grade is:'b'"




2.
var age = 48;

const isAdult = (age >= 18) ? 'You are an adult.' : 'You are not an adult.';
console.log(isAdult);

// o/p:"You are an adult".

 var userInputday=prompt("pls enter a day")
var days=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
if(userInputday === "saturday" || userInputday === "sunday"){
    alert("weekend")
}else{
    alert("not a weekend")
}

var userInput=prompt("enter your age")
var userInput1=prompt("pls enter your citizen")
var citezenShip=true
var citizen="indian"

if(citezenShip === true && userInput>=18 && citizen === "indian" && userInput1 === citizen){
    alert( "the person is citizen and eligible for vote")
}else{
    alert("the person is a non-citizen and not eligible for vote")
}



var userInputprompt = prompt("Enter your username");
var userInputpassword = prompt("Enter your password");
var userName = "admin";
var password = "12345"; 

if (userInputprompt.toLowerCase() === userName.toLowerCase() && userInputpassword === password) {
    alert("You have been successfully logged in");
} else {
    alert("You have entered an incorrect username or password");
}

