function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

console.log(linearSearch([1, 2, 3, 4], 5));
console.log(linearSearch([5, 3, 9, 8, null, 2, 1], 2));



export default linearSearch;