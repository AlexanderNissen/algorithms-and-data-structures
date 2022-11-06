import generateIntArray from '../utils/generateintarray.js';

function mergeSort(arr) {
    let [lowerArr, upperArr] = splitInHalf(arr);
    if (lowerArr.length + upperArr.length > 2) {
        lowerArr = mergeSort(lowerArr);
        upperArr = mergeSort(upperArr);
    }
    return merge(lowerArr, upperArr);
}

function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function splitInHalf(arr) {
    let halfIndex = Math.floor((arr.length - 1)/2);
    let lowerArr = arr.slice(0, halfIndex + 1); // upper index not inclusive
    let upperArr = arr.slice(halfIndex + 1);
    return [lowerArr, upperArr];
}


// Export to test cases
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