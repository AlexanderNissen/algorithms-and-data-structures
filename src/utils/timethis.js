function timeThis(func, ...args) {
    let timeBefore = performance.now();
    func(...args)
    return performance.now() - timeBefore;
}



export default timeThis;