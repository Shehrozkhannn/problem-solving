
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

const nums = [2, 7, 113, 15,20,8,13];

let maxNumber = nums[0];
nums.forEach((val)=> {
    if(val > maxNumber){
        maxNumber = val
    }
})
console.log(maxNumber);





