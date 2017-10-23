const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William'
];



// 1. Filter the list of inventors for those who were born in the 1500's
function filterByYear(person) {
  if (person.year >= 1500 && person.year < 1600) {
    return true;
  } else {
    return false; 
  } 
}

var inventorsFrom1500s = inventors.filter(filterByYear);
console.log(inventorsFrom1500s);

// 2. Give us an array of the inventors' first and last names
function filterByName(input, field1, field2) {
  var names = [];
  for(var i = 0; i < input.length; ++i){
    names.push([input[i][field1], input[i][field2]]);
  }
  return names;
}

console.log(filterByName(inventors, "first", "last"));

// 3. Sort the inventors by birthdate, oldest to youngest
function filterByBirthdate(year, first, last) {
  var birthdates = [];
  for(var i = 0; i < inventors.length; ++i){
    birthdates.push([inventors[i][year], inventors[i][first], inventors[i][last]]);
  } 
  birthdates.sort(function(a, b) {
    return a[0] - b[0];
  });
  
  return birthdates;
}
  console.log(filterByBirthdate("year", "first", "last"));

// 4. How many years did all the inventors live?
function sumOfYears(year, passed, first, last){
  var yearsArray = [];
  var yearsSum = 0;
  var eachAge = 0;
  for(var i = 0; i < inventors.length; ++i){
    yearsArray.push([inventors[i][year], inventors[i][passed]]);
  } 

  for(var i = 0; i < yearsArray.length; i++){
    yearsSum += parseInt(yearsArray[i][1]) - parseInt(yearsArray[i][0]);
    eachAge = parseInt(yearsArray[i][1]) - parseInt(yearsArray[i][0]);
    console.log(`The inventor ${inventors[i][first]} ${inventors[i][last]} lived for ${eachAge} years`);
  } 
  var stm = console.log(`The sum of the amount of years the inventors lived is ${yearsSum} years`);
  return stm;
}

sumOfYears("year", "passed", "first", "last");
// 5. Sort the inventors by years lived
function sumOfYears(year, passed, first){
  var yearsArray = [];
  var yearsSum = [];
  for(var i = 0; i < inventors.length; ++i){
    yearsArray.push([inventors[i][year], inventors[i][passed]]);
  } 

  for(var i = 0; i < yearsArray.length; i++){
    yearsSum.push([parseInt(yearsArray[i][1]) - parseInt(yearsArray[i][0]), inventors[i][first]]);
  } 
  return yearsSum.sort();
}
console.log(sumOfYears("year", "passed", "first"));

// 6. Sort the people alphabetically by last name
var peopleArray = [];

for(var i = 0; i < people.length; i++){
  peopleArray.push(people[i].split(" "));    
}

// FUNCTION That sorts names in alphabetical order
function sortFunction(a, b) {     
  return (a < b) ? -1 : 1;  //uses ternary operator to test the order of last names
}

console.log(peopleArray.sort(sortFunction));
// 7. Sum up the instances of each of these const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'pogostick'
];

function findOccurences(){
  var stm = "";
  var car = 0;
  var truck = 0;
  var bike = 0;
  var walk = 0;
  var van = 0;
  var pogostick = 0;
  for(var i = 0; i < data.length; i++){    
    switch(data[i])
        {
      case ("car"):
        car++;
        break;
      case ("truck"):
        truck++;
        break;
      case ("bike"):
        bike++;
        break;
      case ("walk"):
        walk++;
        break;
      case ("van"):
        van++;
        break;
      case ("pogostick"):
        pogostick++;
        break;
      default:
        console.log("term not found");
        break;

    }
    
  }
  
  stm = `The term car appeared ${car} times. The term truck appeared ${truck} times. The term bike appeared ${bike} times. The term walk appeared ${walk} times. The term van appeared ${van} times. The term pogostick appeared ${pogostick} times.`;

  return stm;
}

console.log(findOccurences());

