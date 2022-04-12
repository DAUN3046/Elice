let result = 0;
let number = new Array();

for(let i=0;i<201;i++){
    number[i] = true;
}
console.log(number);
number[0] = false;
number[1] = false;
for (let i = 0;i <= 201;i++){
    if (number[i]) {
        for (let j = 2 * i;j < 201;j += i) {
            number[j] = false;
        }
    }
}
for (let i = 0;i <= 201;i++){
    if (number[i] == true) {
        result += i;
    }
}

document.write("1이상 200이하의 소수의 합 = " + result);
