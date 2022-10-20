function hasPairWithAverage(numbers, targetAverage) {
    if (numbers.length < 2) {
        throw TypeError('Array must have at least two elements.')
    }
    let lowerBound = 0;
    let upperBound = numbers.length - 1;
    let average = null;
    while (lowerBound <= upperBound) {
        average = (numbers[lowerBound] + numbers[upperBound]) / 2
        if (average > targetAverage) {
            upperBound--;
        } else if (average < targetAverage) {
            lowerBound++;
        } else {
            return true;
        }
    }
    return false;
}

// TODO: Export to test cases
console.log(hasPairWithAverage([1, 2, 2, 4], 2))
console.log(hasPairWithAverage([1, 1, 1, 1, 1], 1.1))
console.log(hasPairWithAverage([1, 2, 3, 4, 5, 6, 7, 8, 9], 5.5))
console.log(hasPairWithAverage([1, 2, 3, 3, 4, 6], 5.5))



export default hasPairWithAverage;