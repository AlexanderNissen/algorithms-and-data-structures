function isSubsequenceOf(substr, str) {
    if (!substr || !str) {
        return null;
    }
    let substrIndex = 0;
    let strIndex = 0;
    while (strIndex < str.length) {
        if (substr[substrIndex] == str[strIndex]) {
            substrIndex++;
        }
        if (substrIndex == substr.length) {
            return true;
        }
        strIndex++;
    }
    return false;
}


console.log(isSubsequenceOf('hej', 'digmedhej'));
console.log(isSubsequenceOf('abc', 'dabbercarl'));
console.log(isSubsequenceOf('xyz', 'zxy'));
console.log(isSubsequenceOf('xh', 'dwqgfxhthhyry'));



export default isSubsequenceOf;