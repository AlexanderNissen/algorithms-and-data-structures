function hasSameDigitFrequency(num1, num2) {
    if (!num1 || !num2) {
        throw new TypeError('Passed numbers cannot be null.')
    }
    
    num1 = num1.toString();
    num2 = num2.toString();
    
    if (num1.length != num2.length) {
        return false;
    }

    let frequencyTable1 = {}
    let frequencyTable2 = {}

    for (let i = 0; i < num1.length; i++) {
        frequencyTable1[num1[i]] = (frequencyTable1[num1[i]] || 0) + 1;
        frequencyTable2[num2[i]] = (frequencyTable2[num2[i]] || 0) + 1;
    }
    
    for (let digit of num1) {
        if (!(digit in frequencyTable2)) {
            return false;
        }
        if (frequencyTable1[digit] !== frequencyTable2[digit]) {
            return false;
        }
    }
    return true;
}


// TODO: Export to test cases
console.log(hasSameDigitFrequency(1, 2));
console.log(hasSameDigitFrequency(123, 321));
console.log(hasSameDigitFrequency(2, 1));
try {
    console.log(hasSameDigitFrequency(null, 2));
} catch(err) {
    console.log(err + ' was caught!')
}
console.log(hasSameDigitFrequency(4356, 4652));
console.log(hasSameDigitFrequency(6574839210, 1234567890));



export default hasSameDigitFrequency;