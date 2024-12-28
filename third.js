// PALINDROME PROBLEM WITH OUT CREATING OR CONVERTING THE STRING IN TO ARRAY


const palindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let start = 0;
    let end = cleanStr.length - 1 

    while(end > start){
        if(cleanStr[start] !== cleanStr[end]) return  'Its not a palidrome';
        start++
        end--
    }
       return 'its a palindrome'
}

console.log(palindrome('civic'))