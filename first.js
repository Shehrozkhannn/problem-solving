
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



const isValid = (str) => {
  let s = str.replace(/\s+/g, '');
  if(s.length % 2 !== 0) return false;

  const stack = [];
  const map = new Map([
    ['(' , ')'],
    ['[' , ']'],
    ['{' , '}'],
  ]);

  for (let i = 0; i < str.length; i++) {
    if(map.has(s[i])){
      stack.push(map.get(s[i]));
    }
    else if (s[i] !== stack.pop()){
      return false;
    }
    
  }
  return stack.length === 0;
}
let str1 = "({} [] ({}))";
let str2 = "}}";

console.log(isValid(str2));

