import generateIntArray from '../../utils/generateintarray.js';

/*
    Runs through the first digit for all integer elements in the array,
    ordering the numbers by putting them in bins based on the value of their
    first digit (from right).
    The integers are then pushed back into the array based on the resulting
    ordering.
    The same procedure is applied for the second digit, the third digit, ...,
    until the array is sorted.
*/
function radixSort(array) {

}

/*
    Advantage: returns 0, whenever the position (from the right) exceeds the
    number of digits in the passed int.
    This behavior is useful in radixSort.
*/
function getDigit(int, posFromRight) {
    return Math.floor(Math.abs(int) / Math.pow(10, posFromRight)) % 10;
}

function countDigits(int) {
    if (int === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(int))) + 1;
}



// TODO: Export to test cases
let int1 = 7;
let int2 = 7756;
let int3 = 0;
let int4 = 9844213;

console.log('--- getDigit ---');
console.log(getDigit(int4, 0));
console.log(getDigit(int4, 1));
console.log(getDigit(int4, 2));
console.log(getDigit(int4, 3));
console.log(getDigit(int4, 4));
console.log(getDigit(int4, 5));
console.log(getDigit(int4, 6));

console.log('--- countDigits ---');
console.log(countDigits(int1));
console.log(countDigits(int2));
console.log(countDigits(int3));
console.log(countDigits(int4));



export default radixSort;