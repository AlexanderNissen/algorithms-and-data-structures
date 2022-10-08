function AddUpTo(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    }
    return total;
}

export default AddUpTo;