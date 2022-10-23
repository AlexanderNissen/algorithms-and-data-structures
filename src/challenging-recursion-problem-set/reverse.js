function reverse(str) {
    if (str.length === 1) {
        return str;
    }
    return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1))
}

console.log(reverse('lol'));
console.log(reverse('Hello, World!'));
console.log(reverse('Good day, mate'));
console.log(reverse('test'));

export default reverse;