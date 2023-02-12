//1 Create a function that takes an array containing only numbers and return the first element.
getFirstValue = (array) => array.shift();
console.log(getFirstValue([100, 90, 80]));

//2 Given two arguments, return an array which contains these two arguments.
//makePair(1, 2) ➞ [1, 2]
function makePair(num1, num2) {
  return [...arguments];
}
console.log(makePair(1, 10));

//3 Create variables a and b from the given array
const arr = [1, 2, 3, 4, 5, 6];
let [a, b] = arr;
console.log(a, b);

//4 Create a function that accepts an array and returns the last item in the array.
function getLastItem(arr) {
  return arr.pop();
}
console.log(getLastItem([1, 2, 3, 4, 5]));

//5 Create a function that takes an array of numbers or letters and returns a string.
//arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
let arrayToString = (arr) => arr.join("");
console.log(arrayToString([1, 2, 3, 4, 5]));

//6 Create a function to concatenate two integer arrays.
let concat = (arr1, arr2) => [...arr1, ...arr2];
console.log(concat([3, 44], [55, 6]));

//7 Create a function that takes an array and a string as arguments and returns the index of the string.
let findIndex = (arr, str) => arr.indexOf(str);
console.log(findIndex(["a", "b", "c"], "b"));

//8 Given an index and an array, return the value of the array with the given index.
//valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5
let valueAt = (a, i) => a[Math.floor(i)];
console.log();

//9 Create a function that takes an array and returns the types of values (data types) in a new array.
//arrayValuesTypes([1, 2, "null", []])
//["number", "number", "string", "object"]
function arrayValuesTypes(arr) {
  return arr.map((el) => typeof el);
}
console.log(arrayValuesTypes([1, 2, "null", []]));

//10 Create a function that takes an array of integers and strings.
//Convert integers to strings and return the new array.
//parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]
function parseArray(arr) {
  return arr.map((el) => el + "");
  //return arr.map(String)
}
console.log(parseArray([1, 2, 3, 4, 5]));

//
console.log();

//
console.log();
//
console.log();

//
console.log();

//
console.log();

//
console.log();

//
console.log();
//
console.log();

//
console.log();

//
console.log();

//
console.log();

//
console.log();
