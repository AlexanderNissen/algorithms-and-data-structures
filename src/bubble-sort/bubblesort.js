// Largest values bubble up to the top
function bubbleSort(array) {
    if (!array) {
        return null;
    }
    isSorted = false;
    leadingIndex = 1;
    while (!isSorted) {
        if (leadingIndex == array.length - 1) {
            leadingIndex = 1;
        }
    }
    return array;
}

function swap(array, index1, index2) {
    let value1 = array[index1];
    array[index1] = array[index2];
    array[index2] = value1;
}

export default bubbleSort;