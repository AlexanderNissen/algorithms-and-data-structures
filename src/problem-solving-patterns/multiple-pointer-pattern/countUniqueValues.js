/*
Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in the array. There can be negative values in
the array, but it will always be sorted.
*/
function countUniqueValues(sortedArray) {
    if (sortedArray.length == 0) {
        return 0
    }
    let previousNumber = sortedArray[0];
    let numberOfUniques = 1;
    let index = 1;
    while (index < sortedArray.length) {
        if (previousNumber < sortedArray[index]) {
            numberOfUniques++;
            previousNumber = sortedArray[index];
        }
        index++;
    }
    return numberOfUniques;
}

// TODO: Export to test cases
let arr1 = [1, 1, 1, 1, 1, 2];
let arr2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
let arr3 = [];
let arr4 = [-2, -1, -1, 0, 1];

console.log(`Array: ${arr1}\n${countUniqueValues(arr1)}\n\n`)
console.log(`Array: ${arr2}\n${countUniqueValues(arr2)}\n\n`)
console.log(`Array: ${arr3}\n${countUniqueValues(arr3)}\n\n`)
console.log(`Array: ${arr4}\n${countUniqueValues(arr4)}\n\n`)

export default countUniqueValues;