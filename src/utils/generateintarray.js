function generateIntArray(quantity, maxValue) {
    return Array.from({length: quantity}, () => Math.floor(Math.random() * maxValue))
}



export default generateIntArray;