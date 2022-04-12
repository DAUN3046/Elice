function getDigits(n){
    let str_array = Array.from(String(n));
    let int_array = [];
    
    for (let i = 0;i < str_array.length;i++) {
        int_array.push(parseInt(str_array[i]));
    }
    return int_array;
}
