
// 1) (a)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let oddNumbers = function(arr) {
    return arr.filter(function(num) {
        return num % 2 !== 0;
    });
};
console.log(oddNumbers(numbers));


//  (b)

const stringArray = ["apple", "banana", "cherry"];

const titleCapsArray = stringArray.map(function(str) {
  
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return str.split(' ').map(capitalizeFirstLetter).join(' ');
});

console.log(titleCapsArray);


//   (c)
let numberArray = [1, 2, 3, 4, 5];
let sum = function(arr) {
    return arr.reduce(function(total, num) {
        return total + num;
    }, 0);
}
let result = sum(numberArray);
console.log(result);


//  (d) 
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findPrimes = function(arr){
  return arr.filter(function(num){
    for (let i=2; i<num; i++){
      if (num % i === 0){
        return false;
      }
    }
    return num > 1;
  });
};
console.log(findPrimes(numbers));

//  (e)
const words = ["level", "hello", "radar", "world", "madam"];

const isPalindrome = function(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

const getPalindromes = function(arr) {
  return arr.filter(function(word) {
    return isPalindrome(word);
  });
};

const palindromeWords = getPalindromes(words);

console.log(palindromeWords);

// f)

const findMedian = function(arr1, arr2) {
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);

  const length = mergedArray.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
  } else {
    return mergedArray[middle];
  }
};

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const median = findMedian(array1, array2);

console.log(median);

// g)

const removeDuplicates = function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
};

const originalArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(originalArray);

console.log(uniqueArray);

// h)

const rotateArray = function(arr, k) {
  const len = arr.length;
  const rotations = k % len;

  return arr.slice(rotations).concat(arr.slice(0, rotations));
};

const originalArray1 = [1, 2, 3, 4, 5];
const rotations = 2;

const rotatedArray = rotateArray(originalArray, rotations);

console.log(rotatedArray);
