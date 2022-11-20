function maxSubarraySum(array, subarrayLength) {
    if (array.length < subarrayLength) {
        return null;
    }
    let maxSum = 0;
    for (let i = 0; i < subarrayLength; i++) {
        maxSum += array[i];
    }
    let tempSum = maxSum;
    for (let i = subarrayLength; i < array.length; i++) {
        tempSum = tempSum - array[i - subarrayLength] + array[i];
        maxSum = Math.max(tempSum, maxSum); // Alternatively, use simple if-statement
    }
    return maxSum;
}

// TODO: Export to test cases
console.log(maxSubarraySum([1, 2, 3, 3, 2, 1], 2))
console.log(maxSubarraySum([1, 2, 3, 3, 1, 6], 3))
console.log(maxSubarraySum([1, null, 2], 2))
console.log(maxSubarraySum([3, 4, 3, 4, 5, 2, 10, -5, 13], 3))



export default maxSubarraySum;