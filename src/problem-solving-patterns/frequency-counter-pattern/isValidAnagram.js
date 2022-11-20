function isValidAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false
    }
    // Maybe not needed
    if (!string1 && !string2) {
        return true;
    }

    let frequencyCounter1 = characterFrequencyOf(string1);
    let frequencyCounter2 = characterFrequencyOf(string2);
    for (let character of string1) {
        if (!(character in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter1[character] !== frequencyCounter2[character]) {
            return false
        }
    }
    return true;

}

function characterFrequencyOf(string) {
    let frequencyCounter = {};
    for (let character of string) {
        frequencyCounter[character] = (frequencyCounter[character] || 0) + 1;
    }
    return frequencyCounter;
}

// TODO: Export to test cases
console.log(
    isValidAnagram('', ''),
    isValidAnagram('rat', 'car'),
    isValidAnagram('texttwisttime', 'timetwisttext'),
    isValidAnagram('qwerty', 'qeywrt'),
    isValidAnagram('awesome', 'meawso'),
    isValidAnagram('azz', 'zaa')
)


export default isValidAnagram;