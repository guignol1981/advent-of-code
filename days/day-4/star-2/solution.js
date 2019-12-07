const input = require('./input').split('-').map(e => (e.trim(), parseInt(e, 10)));

const candidates = [];

for (let index = input[0]; index <= input[1]; index++) {
    const asArray = index.toString().split('').map(e => parseInt(e, 10));

    if (
        asArray.some((e, i, a) =>
            (typeof a[i + 1] !== 'undefined' && a[i + 1] === e)
            &&
            (typeof a[i + 2] === 'undefined' || a[i + 2] !== e)
            &&
            (typeof a[i - 1] === 'undefined' || a[i - 1] !== e)
        )
        &&
        asArray.every((e, i, a) => typeof a[i + 1] === 'undefined' || a[i + 1] >= e)
    ) {
        candidates.push(index);
    }
}

const solution = candidates.length;

console.log(solution);
