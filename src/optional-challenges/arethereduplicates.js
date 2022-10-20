function areThereDuplicates(...args) {
    args.sort();
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] == args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}


// TODO: Export to test cases
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(2, 3, 2));
console.log(areThereDuplicates('a', 'b', 'c'));
console.log(areThereDuplicates('a', 'b', 'a'));
console.log(areThereDuplicates("1", 2, "a", 1));



export default areThereDuplicates;