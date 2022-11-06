import generateIntArray from '../utils/generateintarray.js';
import swap from '../utils/swap.js';
import timeThis from '../utils/timethis.js';


function quicksort(array) {

}

/*
pivot and partition are used interchangeably to refer to the selection
of a pivot point and throwing all values less than the pivot value on the
LHS of the pivot while maintaining the values greater than the pivot value
on the RHS
*/

function partition(array) {
    let pivot = array[0];
    let lessThan = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] <= pivot) {
            console.log(`Swapping ${array[lessThan + 1]} with ${array[i]}`);
            swap(array, lessThan + 1, i);
            lessThan++;
        }
    }
    console.log(`Moving forward the pivot of ${pivot}`);
    swap(array, 0, lessThan);
}

let array = [3, 4, 2, 1, 5, 10, 12, 7, 6, 9];
partition(array);