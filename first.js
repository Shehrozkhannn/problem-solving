
// FIND THE FREQUENCY OF ELEMENTS IN ARRAY
// ---------------------------------------------------------------------------------------------
// let arr = ['hello', 'world', 'java', 'hello','java','java'];
// let overallObj = {};

// arr.forEach((val)=> {
//   if(!overallObj[val]){
//     overallObj[val] = 1 
//   }else{
//     overallObj[val]++;
//   }
// });
// console.log(overallObj);

// METHOD NO 2 WITH REDUCE 

// function countWord(words) {
//     let result = words.reduce((allNames,name)=> {
//       if(name in allNames){
//         allNames[name]++
//       } else {
//         allNames[name] = 1
//       }
//       return allNames
//     },{});

//     return result;
// }

// console.log(countWord(arr))


// GROUP ITEMS ON THE BASIS OF AGE OF GIVEN ARRAY OF OBJECT
// ---------------------------------------------------------------------------------------------

// let people = [
//   { name: 'Alice', age: 21},
//   { name: 'Max', age: 20},
//   { name: 'Jane', age: 20},
// ]

// let groupItems = {};

// people.forEach(item => {
//   if(groupItems[item.age]){
//     groupItems[item.age].push(item)
//   }
//   else{
//     groupItems[item.age] = [item];
//   }
// });

// console.log(groupItems);

// PRGRAM TO CHECK A STRING WITH BALANCED BRACKETS
// ---------------------------------------------------------------------------------------------



// const isValid = (str) => {
//   let s = str.replace(/\s+/g, '');
//   if(s.length % 2 !== 0) return false;

//   const stack = [];
//   const map = new Map([
//     ['(' , ')'],
//     ['[' , ']'],
//     ['{' , '}'],
//   ]);

//   for (let i = 0; i < str.length; i++) {
//     if(map.has(s[i])){
//       stack.push(map.get(s[i]));
//     }
//     else if (s[i] !== stack.pop()){
//       return false;
//     }
    
//   }
//   return stack.length === 0;
// }

//PRACTICE
// const isValid = (str) => {
//     let sanitedStr = str.replace(/\s+/g, '');
//     if(sanitedStr.length % 2 !== 0) return false;

//     const stack = [];
//     const map = new Map([
//       ['{' , '}'],
//       ['(' , ')'],
//       ['[' , ']'],
//     ])

//     for (let index = 0; index < str.length; index++) {
//       if(map.has(str[index])){
//         stack.push(map.get(str[index]))
//       }
//       else if (str[index] !== stack.pop()){
//         return false;
//       }
      
//     }
//     return stack.length === 0;
// }
// let str1 = "({} [] ({}))";
// let str2 = "}})]";

// console.log(isValid(str2));


// FIND THE PAIRS OF ARRAY ELEMENT FOR WHICH SUM IS EQUAL TO GIVEN TARGET VALUE
// ---------------------------------------------------------------------------------------------

let arr = [1,2,3,4,6,7,8,9];
let overallArr = [];

// function twoSum(array, targetVal){
//     for (let i = 0; i < array.length; i++) {
//       for (let j = i+1; j < array.length; j++) {
//         if(array[i] + array[j] == targetVal){
//           overallArr.push([array[i],array[j]])
//         }
//       }
//     }
//     return overallArr;
// }

//METHOD 2
// function twoSum (ar, target) {
//   let hash = {};
//   let sum = [];
//   ar.forEach(item => {
//     let diff = target - item;

//     if(hash[diff.toString()] !== undefined){
//       sum.push([item,diff]);
//     }
//     hash[item.toString()] = item;
//   });
//   return sum;
// }

console.log(twoSum(arr,9));
//OUTPUT [[6,3],[7,2],[8,1]]