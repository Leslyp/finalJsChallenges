// Problem 4: 
// Write a JavaScript program to find the area of a triangle where you pass lengths of the three sides.

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  // get results of calculate area function
  get area() {
    return this.calcArea();
  }

  // Method to calculate area
  calcArea() {
    // use Heron formula to find area of triangle based on three sides
    // math.sqrt is used to get the square root of a number
    var perimeter = (this.side1 + this.side2 + this.side3)/2;
    var area =  Math.sqrt(perimeter*((perimeter-this.side1)*(perimeter-this.side2)*(perimeter-this.side3)));
    return area;
  }
}

// create new object by calling new instance of the class 
// pass in the 3 sides as parameters for class
const triangle1 = new Triangle(3, 4, 5);

console.log(triangle1.area);
