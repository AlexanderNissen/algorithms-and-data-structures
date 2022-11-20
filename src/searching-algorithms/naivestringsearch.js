function stringSearch(string, substring) {
    let matches = 0;
    let j = 0;
    for (let i = 0; i < string.length; i++) {
        while (string[i + j] === substring[j] && j < substring.length) {
            j++;
        }
        if (j === substring.length) {
            matches++;
        }
        j = 0;
    }
    return matches;
}

// TODO: Export to test cases
console.log(stringSearch('wowomgzomg', 'omg'));
console.log(stringSearch('wowomgzomg', 'wowo'));
console.log(stringSearch('SomeControversialStatement', 'yikes'));
console.log(stringSearch('Hello, WorldO!', 'o')); // 2 -> case sensitive comparison



export default stringSearch;