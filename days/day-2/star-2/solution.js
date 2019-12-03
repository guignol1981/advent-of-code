const input = require('./input');

const f = (noun = 0, verb = 0)  => {
    const copy = [...input];
    copy[1] = noun;
    copy[2] = verb;

    for (let i = 0; i < copy.length; i+=4) {
        let cur = copy[i];
        let el1Pos = copy[i+1];
        let el2Pos = copy[i+2];
        let targetPos = copy[i+3];
    
        if (cur === 1) {
            copy[targetPos] = copy[el1Pos] + copy[el2Pos];
            continue;
        } else if (cur === 2) {
            copy[targetPos] = copy[el1Pos] * copy[el2Pos];
            continue;
        } 
    
        break;
    }
    
    if (copy[0] !== 19690720) {
        if (verb < 99) {
            f(noun, ++verb);
        } else {
            verb = 0;

            f(++noun, verb)
        }
    } else {
        console.log(noun, verb);
    }
}

console.log(f());
