// use return from function, tell if string is empty
var newstring = matchStrings("aab");
if(newstring.length === 0 ) {
  console.log('Empty String');
} else {
  console.log(newstring);
}


function matchStrings (str) {
  // tell the while loop to continue/ stop
  var match = true;
  // use while loop to go through string and find matches (can be any letter, num, symbol)
  while(match){
    //tell it to start running
     match = false;
    // create for loop to run through string
     for(var i = 0; i < str.length; i++){
      // use If statement to tell for loop what to do with matched pairs// 
      if(str[i] === str[i+1]){
        match = true;
        var newStrArray = str.split("");
        // tells it to take out the pairs and put in newStrArray
        newStrArray.splice(i, 2);
        // new string is now in str variable
        str = newStrArray.join("")
      } // end if 
    } // end for 
  } // end while
  
    // return the remaining characters in string
    return str;
}