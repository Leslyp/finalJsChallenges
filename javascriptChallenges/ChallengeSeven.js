// Problem 7: 
// Write a JavaScript program to remove a character at the specified position of a given string
// and return the new string.

function modifyString(){
  var userString = prompt("Enter a sentence:");
  var removeChar = prompt(`Your sentence is  "${userString}", \n Which word would you like to remove?`);
  var splitArray = userString.split(" ");
  var removeCharIndex = splitArray.indexOf(removeChar);
  var splicedArray = splitArray.splice(removeCharIndex, 1);
  var newString = splitArray.join(' ');
  var showNewString = alert(`Your new sentence is "${newString}"`);
  return newString;
}

modifyString();

