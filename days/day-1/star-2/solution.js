const input = require('./input');

const calcFuel = (value, fuelSum = 0) => {
    const fuel = Math.floor(value/3) - 2;
    if (fuel < 0) {
        return fuelSum;
    } else {
        return calcFuel(fuel, fuelSum + fuel)
    }
};

const solution = input
    .reduce((acc, cur) => {
        acc += calcFuel(cur);
        return acc;
    }, 0);

console.log(solution);
