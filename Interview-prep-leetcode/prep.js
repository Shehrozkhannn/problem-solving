// ------------------------------ MERGE SORTED ARRAY   ----------------------------- 

// var merge = function (nums1, m, nums2, n) {
//     let newArr = [...nums1.slice(0, m), ...nums2];

//     // Sort them all together
//     newArr.sort((a, b) => a - b);

//     // Copy the result back into nums1
//     for (let i = 0; i < newArr.length; i++) {
//         nums1[i] = newArr[i];
//     }
// };


// let test = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);



/////////// remove element ///


// var removeElements = (nums,val) =>{
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if(nums[i] !== val){
//       nums[k] = nums[i]
//       k++
//     }
//   }
//   return k

// }

// console.log(removeElements([3,2,2,3],3))


// Remove duplicates from sorted array


// var removeDuplicates = function(nums) {
//   if (nums.length === 0) return 0;

//   let k = 1; // pointer for the next unique position
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return k;
// };

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))


// var removeDuplicates = function(nums) {
//   if (nums.length === 0) return 0;

//   let k = 1; // pointer for the next unique position
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1] || nums[i] !== nums[i + 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return k;
// };

// console.log(removeDuplicates([1,1,1,2,2,3]))


////////// MAJORITY ELEMENT LEETCODE ///////////////

// var majorityElement = function(nums) {
//     const obj = {};
//     nums.forEach(element => {
//         obj[element] = (obj[element] || 0) + 1
//     });
//     let majority = nums[0];
//     for(let num in obj){
//         if(obj[num] > obj[majority]){
//             majority = num
//         }
//     }
//     return majority
// };

// console.log(majorityElement([3,2,3,2,2]))


// second method for the same above majority problem  
// Boyer-Moore Majority Vote Algorithm
// let marjorityElement = (nums) => {
//     let count = 0;
//     let candidate = null;

//     for(let element of nums){
//         if(count === 0) candidate = element;
//         count += (element === candidate) ? 1 : -1;
//     }
//     return candidate;
// }

// console.log(marjorityElement([3,1,2,5,1,1,5]))

// ----------------------------------Max stocks profit problem-----------------------------------------------
// var maxProfit = function(prices) {
//     let lowestNum = prices[0];
//     prices.forEach(element => {
//         if(element < lowestNum){
//             lowestNum = element
//         }
//     });
//     for (let index = lowestNum; index < prices.length; index++) {
        
//     }
//     return lowestNum
// };


// console.log(maxProfit([7,1,5,3,6,4]));






// --------------------------------  122. Best Time to Buy and Sell Stock II ----------------------------------------------

var maxProfit = function(prices){
    let minNumber = prices[0];
    let totalProfit = [];
    let singleProfit = 0

    prices.forEach(element => {
        if(element <= minNumber){
            minNumber = element
        }else{
            singleProfit = element - minNumber;
            totalProfit.push(singleProfit);
            minNumber = null;
        }
    });

}

console.log(maxProfit([7,1,5,3,6,4]));
