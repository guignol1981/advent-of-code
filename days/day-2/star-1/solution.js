const input = require('./input');

input[1] = 12;
input[2] = 2;

for (let i = 0; i < input.length; i+=4) {
    let cur = input[i];
    let el1Pos = input[i+1];
    let el2Pos = input[i+2];
    let targetPos = input[i+3];

    if (cur === 1) {
        input[targetPos] = input[el1Pos] + input[el2Pos];
        continue;
    } else if (cur === 2) {
        input[targetPos] = input[el1Pos] * input[el2Pos];
        continue;
    } 

    break;
}

console.log(input);
