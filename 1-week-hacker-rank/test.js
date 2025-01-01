function plusMinus(arr) {
    let sumPositive = 0;
    let sumNegative = 0;
    let sumZero = 0;
    arr.forEach(num => {
        if(num > 0){
            sumPositive = sumPositive + 1
        }else if (num < 0){
            sumNegative = sumNegative + 1
        }else{
            sumZero = sumZero + 1
        }
    });
    let finalPositiveVal = (sumPositive/arr.length).toFixed(6);
    let finalNegativeVal = (sumNegative/arr.length).toFixed(6);
    let finalZerosVal = (sumZero/arr.length).toFixed(6);
    return [finalPositiveVal, finalNegativeVal, finalZerosVal].join('\n')

}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
