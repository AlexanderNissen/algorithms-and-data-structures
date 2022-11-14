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
function getDigit(int, position) {
    return Math.floor(Math.abs(int) / Math.pow(10, position - 1)) % 10;
}

function digitCount(int) {
    if (int === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(int))) + 1;
}

// TODO: Export to test cases
console.log(digitCount(7))
console.log(digitCount(7756))
console.log(digitCount(93))
console.log(digitCount(8054943))
console.log(digitCount(0))

export default radixSort;