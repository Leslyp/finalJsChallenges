// Problem 6: 
// Write a JavaScript program to check from two given integers,
// if one is positive and one is negative. 
function isPosOrNeg(){
  var num1 = prompt("Enter an integer:");
  var num2 = prompt("Enter an integer:");
  
  if(!isNaN(num1) && parseInt(num1) > 0 ){
    console.log(num1 + " is positive");
    
  } else if (!isNaN(num1) && parseInt(num1) < 0 ){
    console.log(num1 + " is negative");
   
  } else if (!isNaN(num1) && parseInt(num1) === 0 ){
    console.log(num1 + " is neither positive nor negative");
  } else {
    alert("Please enter a valid integer.");
  }
  
   if(!isNaN(num2) && parseInt(num2) > 0){
    console.log(num2 + " is positive");
  } else if (!isNaN(num2) && parseInt(num2) < 0){
    console.log(num2 + " is negative");
  } else if (!isNaN(num2) && parseInt(num2) === 0){
    console.log(num2 + " is neither positive nor negative");
  } else {
    alert("Please enter a valid integer.");
  }
}

isPosOrNeg();