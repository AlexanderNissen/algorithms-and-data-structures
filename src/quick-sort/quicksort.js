import generateIntArray from '../utils/generateintarray.js';
import swap from '../utils/swap.js';
import timeThis from '../utils/timethis.js';


function quickSort(array, left = 0, right = array.length - 1) {
    if (!array) {
        return null;
    }
    if (left < right) {
        let partitionIndex = partition(array, left, right);
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
    return array;
}

/*
pivot and partition are used interchangeably to refer to the selection
of a pivot point and throwing all values less than the pivot value on the
LHS of the pivot while maintaining the values greater than the pivot value
on the RHS
*/

function partition(array, start = 0, end = array.length - 1) {
    let pivot = array[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (array[i] < pivot) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }
    swap(array, start, swapIndex);
    return swapIndex;
}


let arr1 = generateIntArray(5, 10000);
let arr2 = generateIntArray(10, 10000);
let arr3 = generateIntArray(20, 10000);
let arr4 = generateIntArray(50, 10000);
let arr5 = generateIntArray(100, 10000);
let arr6 = generateIntArray(1000, 10000);
console.log(quickSort(arr1));
console.log(quickSort(arr2));
console.log(quickSort(arr3));
console.log(quickSort(arr4));
console.log(quickSort(arr5));
console.log(quickSort(arr6));



export default quickSort;