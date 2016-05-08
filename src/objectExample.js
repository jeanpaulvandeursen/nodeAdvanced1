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