const input = require('./input');

const solution = input
    .map(e => 
        Math.floor(e/3 - 2)
    )
    .reduce(
        (acc, cur) => (acc+=cur), 
        0
    );

console.log(solution);
