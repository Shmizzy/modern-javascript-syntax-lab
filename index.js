// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const nums2 = nums.map(element => {
    return element * 2;
}) ;

console.log(nums2);

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [first, second] = pizzaToppings;

console.log(first,second);

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
  const {make, model} = car;

  console.log(make,model);

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppingsEx4 = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppingsEx4];

console.log(controversialPizzaToppings);

// Duplicate the following object and spread its values into a new variable `myCar`.

const carEx5 = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  const myCar = {...carEx5};
  myCar.model = 'q7';

  console.log(carEx5, myCar);

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
function sub(noun = 'cat', adjective = 'white'){
    console.log(`the ${noun} is ${adjective}`);
}
console.log(sub('dog', 'blue'));

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
let isTasty = pizza === 'tasty' ? console.log('yum') : console.log('yuck');

// Simulated language configuration (change this variable to test)
const localLangConfig = null; // Change to 'es', 'fr', etc., or keep it null

// Create a variable called LANG
// Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'en';
// Log the result
console.log('Language setting:', LANG);

// Simulated user theme preference (change this variable to test)
const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// Create a variable called USER_THEME
// Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light';
// Log the result
console.log('User theme setting:', USER_THEME);
