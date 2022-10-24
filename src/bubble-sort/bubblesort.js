import generateIntArray from "../utils/generateintarray.js";
import timeThis from "../utils/timethis.js";

// Largest values bubble up to the top
// Bubble sort: the highest values bubble to the top
function bubbleSort(array) {
    if (!array) {
        return null;
    }
    let maxIter = array.length;
    let swaps = 0;
    for (let i = 1; i < array.length; i++) {
        swaps = 0;
        for (let j = 1; j < maxIter; j++) {
            if (array[j - 1] > array[j]) {
                swap(array, j, j - 1);
                swaps++;
            }
        }
        maxIter--;
        // if (swaps == 0) {
        //     return array;
        // }
    }
    return array;
}

function swap(array, index1, index2) {
    let value1 = array[index1];
    array[index1] = array[index2];
    array[index2] = value1;
}


// TODO: Export to test cases
console.log(bubbleSort([5, 4, 1, 3, 2, 10]));
maxValue = 100;
console.log(bubbleSort(generateIntArray(5, maxValue)));
console.log(bubbleSort(generateIntArray(10, maxValue)));
console.log(bubbleSort(generateIntArray(20, maxValue)));
console.log(bubbleSort(generateIntArray(50, maxValue)));



export default bubbleSort;