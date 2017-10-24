// Problem 2:
 
function calculateIntegers (arrayOfNums){
  var array = arrayOfNums;
  var arrayOfPos = [];
  var arrayOfNeg = [];
  var arrayOfZeroes = [];
  var positivePercent = 0;
  var negativePercent = 0;
  var zeroPercent = 0;

  // loop through whole array and push numbers into corresponding arrays
  for(var i = 0; i < array.length; i++) {
    if(array[i] > 0) {
      arrayOfPos.push(array[i]);
    } else if(array[i] < 0) {
      arrayOfNeg.push(array[i]);      
    } else if(array[i] === 0) {
      arrayOfZeroes.push(array[i]);
    } else{
      console.log("Please Enter only Integers");
      return;
    }
  }
  
  // calculate percentage of numbers in the array
  positivePercent = (arrayOfPos.length / array.length);
  negativePercent = (arrayOfNeg.length / array.length);
  zeroPercent = (arrayOfZeroes.length / array.length);
  
  console.log(`The fraction of positive numbers (${arrayOfPos}) in the array (${array}) of ${ array.length} numbers is ${positivePercent}`);
  console.log(`The fraction of negative numbers (${arrayOfNeg}) in the array (${array}) of ${ array.length} numbers is ${negativePercent}`);
  console.log(`The fraction of zeroes (${arrayOfZeroes}) in the array (${array}) of ${ array.length} numbers is ${zeroPercent}`);

}

calculateIntegers([0, 1, +2, -3, -4]);


