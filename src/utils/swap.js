function swap(array, index1, index2) {
    if (index1 === index2) {
        return null;
    }
    let value1 = array[index1];
    array[index1] = array[index2];
    array[index2] = value1;
}

export default swap;