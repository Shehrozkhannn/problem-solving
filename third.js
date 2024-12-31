// PALINDROME PROBLEM WITH OUT CREATING OR CONVERTING THE STRING IN TO ARRAY


// const palindrome = (str) => {
//     const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let start = 0;
//     let end = cleanStr.length - 1 

//     while(end > start){
//         if(cleanStr[start] !== cleanStr[end]) return  'Its not a palidrome';
//         start++
//         end--
//     }
//        return 'its a palindrome'
// }

// // console.log(palindrome('civic'));


// // PALINDROME PROBLEM FOR NUMBERS!!!

// const numbersPalindrome = (num) => {
//     const originalNum = num;
//     let reversedNum = 0;
//     let temp = num;

//     while (temp > 0){
//         const digit = temp % 10;
//         reversedNum = reversedNum * 10 + digit;
//         temp = Math.floor(temp / 10);
//     }
//     if(reversedNum === originalNum) return "Its a palindrome"
//     return "Its not a palidrome"
// }

// console.log(numbersPalindrome(1000))


// FIND MIDDLE ELEMENT FROM AN ARRAY
// function findMedian(arr) {
//     const sortedArr = arr.sort((a,b)=> a-b);
//     console.log(sortedArr)
//     var middle = sortedArr[Math.floor(sortedArr.length / 2)];
//     console.log(middle)
// }

// console.log(findMedian([1,10,3,6,2]))


///////////////////////////////////FINDING LONELY INTEGER HACKER RANK ////////////////////////////////////////////////

// function lonelyinteger(a) {
//     let checkValues = {};
//     for (let i = 0; i < a.length; i++) {
//         if(checkValues[a[i]]){
//             checkValues[a[i]]++;
//         }else{
//             checkValues[a[i]] = 1;
//         }
        
//     }
//     for (const value in checkValues) {
//         if(checkValues[value] === 1){
//             return value
//         }
//     }
//    return null
// }
// console.log(lonelyinteger([1,2,3,4,3,2,1]))

//SECOND METHOD USING XOR

// const lonelyinteger = (a) => {
//     return a.reduce((acc,val)=> acc ^ val,0)
// }
// console.log(lonelyinteger([1,2,3,4,3,2,1]))


// THIRD METHOD FOR FINDING LONELY INTEGER FROM AN ARRAY ///

const lonelyinteger = (a) => {
    const checkValues = new Map();
    for (const element of a) {
        checkValues.set(element , (checkValues.get(element) || 0) + 1)
    }
    for(let [key,value] of checkValues){
        if(value === 1){
            return key
        }
    }
}
console.log(lonelyinteger([1,2,3,4,3,2,1]))