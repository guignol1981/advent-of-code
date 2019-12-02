const input = require('./input');

const calcFuel = (value, fuelSum = 0) => {
    const mass = Math.floor(value/3) - 2;
    if (mass < 0) {
        return fuelSum;
    } else {
        return calcFuel(mass, fuelSum + mass)
    }
};

const solution = input
    .reduce((acc, cur) => {
        acc += calcFuel(cur);
        return acc;
    }, 0);

console.log(solution);
