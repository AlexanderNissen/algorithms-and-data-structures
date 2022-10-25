import generateIntArray from "../utils/generateintarray.js";

/*
In each iteration, first element in current unsorted subarray is pivot
and is swapped with minimum value in said subarray
*/
function selectionSort(array) {
    if (!array) {
        return null;
    }
//    let min;
    let minIndex;
    let noSwaps;
    for (let i = 0; i < array.length; i++) {
        min = array[i];
        minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j];
                minIndex = j;
                noSwaps = false;
            }
        }
        if (noSwaps) {
            return array;
        }
        swap(array, minIndex, i);
    }
    return array;
}


function swap(array, index1, index2) {
    ([array[index1], array[index2]] = [array[index2], array[index1]])
}


// TODO: Export to test cases
let arr1 = generateIntArray(5, 1000);
let arr2 = generateIntArray(10, 1000);
let arr3 = generateIntArray(20, 1000);
let arr4 = generateIntArray(50, 1000);
let arr5 = generateIntArray(100, 1000);
console.log(selectionSort(arr1));
console.log(selectionSort(arr2));
console.log(selectionSort(arr3));
console.log(selectionSort(arr4));
console.log(selectionSort(arr5));



export default selectionSort;