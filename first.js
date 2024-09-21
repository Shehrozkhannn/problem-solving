
// FIND THE FREQUENCY OF ELEMENTS IN ARRAY
// ---------------------------------------
let arr = ['hello', 'world', 'java', 'hello','java','java'];
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

function countWord(words) {
    let result = words.reduce((allNames,name)=> {
      if(name in allNames){
        allNames[name]++
      } else {
        allNames[name] = 1
      }
      return allNames
    },{});

    return result;
}

console.log(countWord(arr))


