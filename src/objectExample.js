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
    - the function name starting with a capital, like a Class, sometimes called a pseudoclass
    - the this and new keywords
*/

var Car = function() {
 this.honk = function() {
  console.log('honk honk');
 };
};

var myCar4 = new Car();

myCar4.honk();

console.log(myCar4.constructor);

/* In the previous examples, functions are still copied to all objects using *this*
    resulting in a large memory overhead. That ca be eliminated by creating a prototype.
    Objects created from the prototype will not have the function themselves, but in
    stead point to the prototype unless overridden.
*/

var SuperCar = function() {
 SuperCar.prototype.honk = function() {
  console.log('honk honk');
 };
};

var myCar5 = new SuperCar();
var myCar6 = new SuperCar();

myCar5.honk();
myCar6.honk();

// Override the prototype function

myCar6.honk = function() {
    console.log('meep meep');
};

myCar6.honk();
