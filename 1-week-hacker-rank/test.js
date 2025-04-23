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


let a = [1,2,3,4,3,2,1];
let store = {};
a.forEach((val)=>{
    if(store[val]){
        store[val]++
    }else{
        store[val] = 1
    }
})
for (let key in store) {
    if (store[key] === 1) {
        console.log("Lonely integer:", Number(key));
    }
}
console.log(store);
