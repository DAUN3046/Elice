function getOnlyEvenNumber (input) {
    var result = []
    for (let i = 0;i < input.length;i++) {
        if (input[i] % 2 == 0) {
            result.push(input[i]);
        }
    }
    return result
}
