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


var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let k = 1; // pointer for the next unique position
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))