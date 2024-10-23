
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

const twoSum = (nums, target) => {
  return nums.map((num, i) => {
    const complementIndex = nums.find((n, j) => j > i && n === target - num);

    if (complementIndex !== undefined) {
      return [i, nums.indexOf(complementIndex)];
    }
  }).filter(Boolean)[0];  // Remove undefined entries and return the first match
};

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); 