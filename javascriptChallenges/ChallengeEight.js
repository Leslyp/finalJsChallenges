// Problem 8: 
// Write a JavaScript program to check if three given integer values are in the range 50-99 (inclusive). 
// Return true if one or more of them are in the said range. 

function checkForInteger(num1, num2, num3) {
  var inRange = [];
  
  if(!isNaN(num1) && parseInt(num1) >= 50 && parseInt(num1) <= 99 || !isNaN(num2) && parseInt(num2) >= 50 && parseInt(num2) <= 99 || !isNaN(num3) && parseInt(num3) >= 50 && parseInt(num3) <= 99) {
    inRange.push("true");
  } else {
    alert("Your number(s) are not in the 50-99 range");   
  }
  
  if(inRange.length >= 1){
     alert("Your number(s) are in the 50-99 range");  
  }
}

checkForInteger(20,22, 59);