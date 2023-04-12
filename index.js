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

//11 Create a function which returns the number of true values there are in an array.
//countTrue([true, false, false, true, false]) ➞ 2
countTrue = (arr) => arr.reduce((sum, current) => (sum += current), 0);
console.log(11 + ")  " + countTrue([true, false, false, true, false]));

//12. Write a function that converts an object into an array,
//where each element represents a key-value pair in the form of an array.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
function toArray(obj) {
  return Object.entries(obj);
}
console.log(toArray({ a: 1, b: 2 }));

//13. Create a function that concatenates n input arrays, where n is variable.
//concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
function concat2(...args) {
  return args.flat();
}
console.log(concat2([1, 2, 3], [4, 5], [6, 7]));

//14. Create a function that takes two numbers as arguments (num, length)
// and returns an array of multiples of num until the array length reaches length.
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
function arrayOfMultiples(num, length) {
  let arr = [num];
  for (let i = 2; i <= length; i++) {
    arr.push(num * i);
  }
  return arr;
}
console.log(arrayOfMultiples(7, 5));

//15. Create a function that takes an array of numbers and returns the second largest number.
//secondLargest([10, 40, 30, 20, 50]) ➞ 40
function secondLargest(arr) {
  return arr.sort((a, b) => b - a)[1];
}
console.log(secondLargest([10, 40, 30, 20, 50]));

//16. Write a function that returns the total number of non-nested items in a nested array.
//getLength([1, [2, 3]]) ➞ 3
function getLength(arr) {
  return arr.flat(Infinity).length;
}
console.log(getLength([1, [2, 3]]));

// 17. Unpack the arr into four variables, first, second, third, and other.
//arr = [1, 2, 3, 4, 5, 6, 7, 8]
//irst ➞ 1 second ➞ 2 third ➞ 3 other ➞ [4, 5, 6, 7, 8]
[first, second, third, ...other] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(other);

//18. Create a function that checks whether it is a palindrome.
//    mom racecar kayak
checkPalindrome = (str) => str === str.split("").reverse().join("");
console.log(checkPalindrome("mom"));

//19. Write a function that takes an integer n, reverses the binary
//representation of that integer, and returns the new integer from the reversed binary.
//reversedBinaryInteger(10) ➞ 5
// 10 = 1010 -> 0101 = 5
function reversedBinaryInteger(num) {
  return parseInt(num.toString(2).split("").reverse().join(""), 2);
}
console.log(reversedBinaryInteger(10));

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
