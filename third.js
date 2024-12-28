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

// console.log(palindrome('civic'));


// PALINDROME PROBLEM FOR NUMBERS!!!

const numbersPalindrome = (num) => {
    const originalNum = num;
    let reversedNum = 0;
    let temp = num;

    while (temp > 0){
        const digit = temp % 10;
        reversedNum = reversedNum * 10 + digit;
        temp = Math.floor(temp / 10);
    }
    if(reversedNum === originalNum) return "Its a palindrome"
    return "Its not a palidrome"
}

console.log(numbersPalindrome(1000))