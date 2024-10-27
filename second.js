
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
let container = [5,10,15,20,25];
let containerTwo = [7,10,18,28,27];

const mergeTwoSortedArray = (arr1 , arr2) => {
    const mergedArr = [...arr1 , ...arr2];
    // console.log(mergedArr);
    for (let index = 0; index < mergedArr.length; index++) {
        for (let j = 0; j < mergedArr.length-1; j++) {
            if(mergedArr[j] > mergedArr[j+1]){
                let temp = mergedArr[j]
                mergedArr[j] = mergedArr[j+1]
                mergedArr[j+1] = temp;
            }
            if(mergedArr[j] === mergedArr[j+1]){

            }
        }
    }
    return mergedArr
}

console.log(mergeTwoSortedArray(container,containerTwo));


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




