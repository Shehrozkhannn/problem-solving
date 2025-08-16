// function plusMinus(arr) {
//     let sumPositive = 0;
//     let sumNegative = 0;
//     let sumZero = 0;
//     arr.forEach(num => {
//         if(num > 0){
//             sumPositive = sumPositive + 1
//         }else if (num < 0){
//             sumNegative = sumNegative + 1
//         }else{
//             sumZero = sumZero + 1
//         }
//     });
//     let finalPositiveVal = (sumPositive/arr.length).toFixed(6);
//     let finalNegativeVal = (sumNegative/arr.length).toFixed(6);
//     let finalZerosVal = (sumZero/arr.length).toFixed(6);
//     return [finalPositiveVal, finalNegativeVal, finalZerosVal].join('\n')

// }

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));


////////////////////////////// MINIMAX PROBLEM ///////////////////////////////////////////////////////////

// function miniMaxSum(arr) {
//     const sortedArray = arr.sort((a,b)=> a-b);
//     const minSum = sortedArray.slice(0,arr.length-1).reduce((acc,val)=> acc + val,0);
//     const maxSum = sortedArray.slice(1,arr.length).reduce((acc,val)=> acc + val,0);
//     console.log(minSum, maxSum)
// }

// miniMaxSum([1,3,5,7,9])




////// FIND LONELY INTEGER HACKER RANK


// let a = [1,2,3,4,3,2,1];
// let store = {};
// a.forEach((val)=>{
//     if(store[val]){
//         store[val]++
//     }else{
//         store[val] = 1
//     }
// })
// for (let key in store) {
//     if (store[key] === 1) {
//         console.log("Lonely integer:", Number(key));
//     }
// }
// console.log(store);


///////////// DIAGONAL DIFFERENCE //////////////////////////

function diagonalDifference(arr){
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    let n = arr.length;
    console.log(n)
    for (let i = 0; i < n; i++) {
        primaryDiagonal += arr[i][i];             // same row and column
        secondaryDiagonal += arr[i][n - 1 - i];    // row, but column from end
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

let matrix = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
]
diagonalDifference(matrix)

// leet code problems 
// ----------------------------------THREESUM--------------------------------------
function threeSum(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort array
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Skip duplicates for second and third elements
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;

            } else if (sum < 0) {
                left++; // Need a bigger sum
            } else {
                right--; // Need a smaller sum
            }
        }
    }
    return result;
}

// -------------------------- FOUR SUM ------------------------------------------------ 

function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;

                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
}