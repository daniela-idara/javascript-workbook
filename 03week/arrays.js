// 1. length

const cars = ['Ford', 'Nissan', 'Volvo', 'BMW'];
console.log(cars.length);

// 2. concat

let moreCars = ['Acura', 'Kia', 'Tesla', 'Honda'];
let totalCars = cars.concat(moreCars);

console.log(totalCars);

// 3. indexOf and lastIndexOf

console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));

// 4. join

let stringOfCars = totalCars.join();
console.log(stringOfCars);

// 5. split

totalCars = stringOfCars.split(',');
console.log(totalCars);

// 6. reverse

let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// 7. sort

console.log(carsInReverse.sort());
console.log(carsInReverse.indexOf('Acura')); //my prediction for index 0

// 8. slice

let removedCars = carsInReverse.slice(2, 4);
console.log(removedCars);

// 9. splice

carsInReverse.splice(1, 2, 'Ford', 'Honda');
console.log(carsInReverse);

// 10. push

carsInReverse.push('Ford', 'Honda');
console.log(carsInReverse);

// 11. pop

console.log(carsInReverse.pop());

// 12. shift

console.log(carsInReverse.shift());

// 13. unshift

console.log(carsInReverse.unshift('Audi'));
console.log(carsInReverse);

// 14. forEach

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
let addTwo = [];

numbers.forEach(function(value){
    addTwo.push(value + 2);
    console.log(addTwo);
  });


