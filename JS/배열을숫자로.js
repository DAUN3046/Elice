function makeNumberFromDigits(array) {
    let result = "";
    for (let i = 0;i < array.length;i++) {
        result += array[i].toString();
    }
    return parseInt(result)
}
