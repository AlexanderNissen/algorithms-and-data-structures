import generateIntArray from "../../utils/generateintarray.js";

/*
A sorted subarray is built up, expanding the subarray by one for each iteration.
*/
function insertionSort(array) {
    if (!array) {
        return null;
    }
    let currentValue;
    for (let i = 1; i < array.length; i++) {
        currentValue = array[i]
        if (currentValue > array[i - 1]) {
            continue;
        }
        for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {            
            array[j + 1] = array[j];
        }
        array[j + 1] = currentValue;
    }
    return array;
}


// TODO: Export to test cases
let arr1 = generateIntArray(5, 1000);
let arr2 = generateIntArray(10, 1000);
let arr3 = generateIntArray(20, 1000);
let arr4 = generateIntArray(50, 1000);
let arr5 = generateIntArray(100, 1000);
console.log(insertionSort(arr1));
console.log(insertionSort(arr2));
console.log(insertionSort(arr3));
console.log(insertionSort(arr4));
console.log(insertionSort(arr5));



export default insertionSort;