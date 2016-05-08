var myCar = {};

myCar.honk = function() {
  console.log('honk honk');  
};

myCar.drive = function() {
 console.log('vrooom...');
};

myCar.honk();
myCar.drive();

/* Simple object creator
    No relationship between the creator and the implementations
*/
var makeCar = function() {
 var newCar = {};
 newCar.honk = function() {
  console.log('honk honk');
 };
 return	newCar;
};

myCar1 = makeCar();
myCar2 = makeCar();
myCar3 = makeCar();

/* Object creator using constructor function
    Relationship between the creator and the implementations
    A constructor function is defined by:
    - the function name starting with a capital, like a Class, sometime
    - 
*/

var Car = function() {
 this.honk = function() {
  console.log('honk honk');
 };
};

var myCar4 = new Car();
var myCar5 = new Car();

myCar4.honk();

console.log(myCar4.constructor);
console.log(myCar5.constructor);