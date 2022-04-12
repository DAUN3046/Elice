function getOnlyAdults(array) {
    let result = [];
    for (let i = 0;i < array.length;i++){
        if (array[i].age >= 20) {
            result.push(array[i].name);
        }
    }
    return result
}
