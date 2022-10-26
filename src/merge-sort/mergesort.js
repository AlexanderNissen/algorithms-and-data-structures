import generateIntArray from '../utils/generateintarray.js';
import timeThis from '../utils/timethis.js';

function mergeSort() {
    
}

let arr1 = generateIntArray(5, 1000);
let arr2 = generateIntArray(10, 1000);
let arr3 = generateIntArray(20, 1000);
let arr4 = generateIntArray(50, 1000);
let arr5 = generateIntArray(100, 1000);
console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
console.log(mergeSort(arr3));
console.log(mergeSort(arr4));
console.log(mergeSort(arr5));



export default mergeSort;