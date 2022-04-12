const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = []

function calculate(func) {
    if (func[1] == ">") {
        return parseInt(func[0]) > parseInt(func[2]);
    } else if (func[1] == "<") {
        return parseInt(func[0]) < parseInt(func[2]);
    } else {
        return parseInt(func[0]) == parseInt(func[2]);
    }
    
}

rl.on("line", (line) => {
    input = line.split(' ');
    rl.close();
})

rl.on("close", () => {
    console.log(calculate(input));
    process.exit();
})
