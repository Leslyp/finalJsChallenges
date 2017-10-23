// Problem 3: 
// Write a JavaScript program to get the current date, as well as functionality to add and subtract days. Expected Output :  mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 

function getDate(){
  var inputSign = prompt("Enter an operation, either (+) or (-):");
  var inputNum = parseInt(prompt("Enter an integer:"));
  
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var newDay = 0;
  var finalDate = `Todays date is: ${month}-${day}-${year}`;
  
  if(inputSign === "+" && !isNaN(inputNum)) {
    newDay = day + inputNum;
    console.log(`Your modified date is: ${month}-${newDay}-${year}`);
  } else if (inputSign === "-" && !isNaN(inputNum)){
    newDay = day - inputNum;
    console.log(`Your modified date is: ${month}-${newDay}-${year}`);
  } else{
    alert("Please enter valid info");
  }
  return finalDate;
}
 
console.log(getDate());