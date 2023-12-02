// read from stdin all lines
const readline = require('readline');
const {parseNumberFromString} = require("./first_solution");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0;
rl.on('line', (line) => {
    const newNumber = parseNumberFromString(line);
    sum += newNumber;

});

rl.on('close', () => {
    console.log('result is:', sum);
});

