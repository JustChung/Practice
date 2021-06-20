// Given an array of integers find the sum of the array

var array = [1, 5, 2, 8, 21, 2];

// Given an array of integers, return an equally sized array with all the numbers squared

function sqaureOfArray(array) {
  var squared = [];
  for (var i = 0; i < array.length; i++) {
    squared.push(array[i] * array[i]);
  }
  return squared;
}

function squareOfArrayV2(array) {
  array.map((val) => {
    return val * val;
  });
}

console.log(sqaureOfArray(array));

console.log(squareOfArrayV2(array));

function sumOfArray(array) {
  var number = 0;
  for (var i = 0; i < array.length; i++) {
    number += array[i];
  }
  return number;
}

/**
 * Higher order functions -> arrays
 */
function sumOfArrayV2(array) {
  let sum = 0;
  array.forEach((val) => {
    sum += val;
  });
  return sum;
}

function sumOfArrayV15(array) {
  let sum = 0;
  array.forEach(function inner(val) {
    return (sum += val);
  });
  return sum;
}

const sumOfArrayV17 = (array) => {
  let sum = 0;
  array.forEach(function inner(val) {
    return (sum += val);
  });
  return sum;
};

console.log("The sum is:", sumOfArray(array));

console.log("The sum is:", sumOfArrayV17(array));

/**
 * For loop of array
 * Higher order functions: forEach, map
 *
 */

/**
 * Task 1
 * Using higher order functions, given an array of integers, remove all the odd numbers
 */
var arrayOfNumbers = [1,4,6,19,23]
var oddnumbers
arrayOfNumbers.map((val) =>  oddnumbers.push(val%2))

const numbers = [1, 6, 2, 3, 6, 5, 1];
/**
 * Bonus points: do it in one line
 */

/**
 * Task 2
 * Given an array of first names and last names, combine them and just return the name
 */

const people = [
  { firstName: "Brian", lastName: "Chung" },
  { firstName: "Justin", lastName: "Chung" },
];

const result = ["Brian Chung", "Justin Chung"];

/**
 * Task 3
 * What is the differences of let, const, and var => where would you use them?
 */


//task 1
var arrayOfNumbers = [1,4,6,19,23]
arrayOfNumbers.map((val) =>  {
  var oddnumbers = []
  if (val%2==0) {
    oddnumbers.push(val)
  }
  return (oddnumbers);
});

//task 2
people.map((people) => {
    var combined= []
    combined.push(people.firstName +" "+ people.lastName)
    return combined
  });

//task 1
var arrayOfNumbers = [1,4,6,19,23]
arrayOfNumbers.filter(val => val%2==0);

//task 2
people.map((people) => people.firstName +" "+ people.lastName );


function hi(){
    return "hello"
}

hi()