
// function twoSum(nums, target) {
//   const map = {};

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map[complement] !== undefined) {
//       return [map[complement], i];
//     }
//     map[nums[i]] = i;
//   }
//   return [];
// }

//SECOND WAY

// const twoSum = (nums, target) => {
//   return nums.map((num, i) => {
//     const complementIndex = nums.find((n, j) => j > i && n === target - num);

//     if (complementIndex !== undefined) {
//       return [i, nums.indexOf(complementIndex)];
//     }
//   }).filter(Boolean)[0];  // Remove undefined entries and return the first match
// };

// // Example usage:
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); 


// REVERESE STRING
// ---------------------------------------------------------------------------------------------

// function reverseString(str){
//   return str.split('').reverse().join('');
// }

// console.log(reverseString('Eisha'));

//CHECKING FOR PALINDROME

// const checkingPalindrome = (str) => {
//     const reverseString = str.toLowerCase().split('').reverse().join('');
//     return reverseString === str.toLowerCase() ? 'Palindrome' : 'Not a palindrome'
// }

// console.log(checkingPalindrome('Mom'));

//LARGEST NUMMBER FROM THE ARRAY;

// const nums = [2, 7, 113, 15,20,8,13];

// let maxNumber = nums[0];
// nums.forEach((val)=> {
//     if(val > maxNumber) maxNumber = val
// })
// console.log(maxNumber);

// SECOND APPROACH
// const nums = [2, 7, 113, 15, 20, 8, 13];
// let maxNumber = nums.reduce((max, current) => (current > max ? current : max), nums[0]);
// console.log(maxNumber);

// -------------------------Find the First Non-Repeating Character in a String------------------------------

// const nonRepetativeString = (str) => {
//     let store = {};
//    return str.split('').forEach((val)=> {
//     store['key'] = val 
//    });
// }


// console.log(nonRepetativeString('swiss'));

// function firstNonRepeatingCharacter(str) {
//     const charCount = {};

//     for (let char of str) {
//       charCount[char] = (charCount[char] || 0) + 1;
//     }

//     for (let char of str) {
//       if (charCount[char] === 1) {
//         return char;
//       }
//     }
  
//     return null;
//   }
  
//   // Example usage:
//   const result = firstNonRepeatingCharacter("swiss");
//   console.log(result);

// -------------------------MERGE TWO SORTED ARRAYS INTO ONE SORTED ARRAY ------------------------------
// let container = [5,10,15,20,25];
// let containerTwo = [7,10,18,28,27];

// const mergeTwoSortedArray = (arr1 , arr2) => {
//     const mergedArr = [...arr1 , ...arr2];
//     // console.log(mergedArr);
//     for (let index = 0; index < mergedArr.length; index++) {
//         for (let j = 0; j < mergedArr.length-1; j++) {
//             if(mergedArr[j] > mergedArr[j+1]){
//                 let temp = mergedArr[j]
//                 mergedArr[j] = mergedArr[j+1]
//                 mergedArr[j+1] = temp;
//             }
//             if(mergedArr[j] === mergedArr[j+1]){

//             }
//         }
//     }
//     return mergedArr
// }

// console.log(mergeTwoSortedArray(container,containerTwo));


/// REMOVING DUPLICATES BEST MEETHOD
// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = array.filter((value, index) => array.indexOf(value) === index);
// console.log(uniqueArray); 

//ANOTHER METHOD
// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = [];
// const seen = {};

// for (let i = 0; i < array.length; i++) {
//     if (!seen[array[i]]) {
//         uniqueArray.push(array[i]);
//         seen[array[i]] = true;
//     }
// }

// console.log(uniqueArray); 




//BASIC CALCULATOR

// const basicCalculator = (num1, num2, operator) => {
//     if (operator === '+') return num1 + num2;
//     else if (operator === '-') return num1 - num2;
//     else if (operator === '*') return num1 * num2;
//     else if (operator === '/') return num1 / num2;
//     else return "Invalid operator";
    
// };
// console.log(basicCalculator(0, 0, '+')); 

// ANOTHER METHOD

// const operators = ['+', '-', '*', '/'];
// const basicCalculator = (num1,num2,operator) => {
//     const index = operators.indexOf(operator)
//     switch (index) {
//         case 0: return num1 + num2
//         case 1: return num1 - num2
//         case 2: return num1 * num2
//         case 3: return num1 / num2
//         default: 'Invalid operator';
//     }
// }

// ----------------------- * Create a function that counts the number of vowels in a given string. -------


// const countVowels = (str) => {
//     let vowelsCount = 0;
//     const vowels = ['a','e','i','o','u'];
//     str.toLowerCase().split('').forEach((val)=> {
//         if(vowels.includes(val)){
//             vowelsCount++;
//         }
//     })
//     return vowelsCount
// }

// console.log(countVowels('banana'));

//SECOND METHOD

// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return str
//       .toLowerCase()
//       .split('')
//       .filter(char => vowels.includes(char)).length;
//   }
  
//   // Example usage
//   const result = countVowels("Hello World");
//   console.log(result);


// ----------------------- *Return common elements from two arrays. -------------------------------------

// const returnCommonElements = (arr1, arr2) => {
//     const mergedArr = [...arr1 , ...arr2];
//     return mergedArr.filter((val,index)=> index !== mergedArr.indexOf(val));
// }
// console.log(returnCommonElements([1,25,10,20,3],[3,10,13,25,19,1]));



//Flatten a Nested Array Implement a function that flattens a deeply nested array (e.g., [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]).

// const nestedArray = [1, [2, [3, 4]], 5];
// const flattenedArray = nestedArray.flat(Infinity);

// console.log(flattenedArray);


// Check for Anagrams
// * Write a function to determine if two strings are anagrams (e.g., "listen" and "silent").


const checkForAnagrams = (str1, str2) => {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2 ? 'ANAGRAM' : 'Not Anagram';
};

console.log(checkForAnagrams('listen', 'silent'));
console.log(checkForAnagrams('hello', 'world')); 