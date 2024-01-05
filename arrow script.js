// a)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let printOddNumbers = arr =>arr.filter(number => number % 2 !== 0).forEach(oddNumber => console.log(oddNumber));

 printOddNumbers(numbers);


// b)
let stringArray = ["appple", "bannana", "grapes"];
let convertToTitleCase = arr =>{
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

};
let titleCaseArray = convertToTitleCase(stringArray);
console.log(titleCaseArray);

// c)

const numbers1 = [1, 2, 3, 4, 5];

const sumOfNumbers = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const totalSum = sumOfNumbers(numbers);

console.log(totalSum);

// d)

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getPrimeNumbers = arr => arr.filter(num => isPrime(num));

const primeNumbers = getPrimeNumbers(numbers);

console.log(primeNumbers);


// e)
const words = ["level", "hello", "radar", "world", "madam"];

const isPalindrome = str => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

const getPalindromes = arr => arr.filter(word => isPalindrome(word));

const palindromeWords = getPalindromes(words);

console.log(palindromeWords);