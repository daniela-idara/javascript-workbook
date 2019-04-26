// 1. Use a do...while loop to console.log the numbers from 1 to 1000

const numberLoop = ( ) => {
    let num = "";
    let i = 1;
    do {
        num +=  i + ', ';
        i++;
    }
     while (i <= 1000);
     console.log(num);
}

numberLoop();

//2. Create an object (an array with keys and values) called person 

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
}

let birthYear = person.birthDate.slice(7,11);

//3. Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number

let x;
for (x in person) {
    if (birthYear % 2 != 0) {
  console.log(birthYear);
}
    else {
      console.log('The year is even');  
    }
}

//4. Create an arrayOfPersons that contains mulitiple objects

const arrayOfPersons = [
  {
    firstName: "Rion",
    lastName: "Wolf",
    birthDate: "Apr 13, 1975",
    gender: "male",
  },
  {
    firstName: "Daniela",
    lastName: "Archibong",
    birthDate: "Jan 09, 1987",
    gender: "female", 
  },
  {
    firstName: "Jordan",
    lastName: "Suber",
    birthDate: "Sep 19, 1991",
    gender: "male",
  },
  {
    firstName: "Carlis",
    lastName: "Burns",
    birthDate: "Mar 25, 1937",
    gender: "female",
  }
]

//5. Use .map() to map over the arrayOfPersons and console.log() their information.

const myPeople = arrayOfPersons.map(arrayOfPersons => (arrayOfPersons));

console.log(myPeople);

//6. Use .filter() to filter the persons array and console.log only males in the array.

let genderedPerson = arrayOfPersons.filter(arrayOfPersons => arrayOfPersons.gender === 'male');

console.log(genderedPerson);


//7. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

let bornBeforeNineties = arrayOfPersons.filter(function(currentYear) {
  let displayBorn = currentYear.birthDate.substring(8, 12);
  if (displayBorn < 1990) {
  console.log([currentYear.firstName, currentYear.lastName, currentYear.birthDate]);
  }
}); 
