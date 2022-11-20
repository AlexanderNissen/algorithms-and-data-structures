function binarySearch(array, value) {
    if (!array || !value) {
        -1;
    }
    let lowerBound = 0;
    let upperBound = array.length;
    let pivot = Math.floor(array.length / 2) - 1;
    while (lowerBound != upperBound) {
        if (array[pivot] < value) {
            lowerBound = pivot + 1;
        } else if (array[pivot] > value) {
            upperBound = pivot;
        } else {
            return pivot;
        }
        pivot = Math.floor((lowerBound + upperBound) / 2);
    }
    return -1;
}


// TODO: Export to test cases
console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); // -1



export default binarySearch;