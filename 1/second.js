// read from stdin all lines
const readline = require('readline');
const {parseNumberFromString} = require("./second_solution");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0;
rl.on('line', (line) => {
    const newNumber = parseNumberFromString(line);
    console.log('newNumber is:', newNumber);
    sum += newNumber;

});

rl.on('close', () => {
    console.log('\nresult is:', sum);
});

