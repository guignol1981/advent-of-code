const inputs = require('./input');

const wirePath1 = inputs.input1
    .split(',')
    .map(e => (e.trim(), {
        direction: e.slice(0, 1),
        steps: parseInt(e.slice(1), 10)
    }));
const wirePath2 = inputs.input2
    .split(',')
    .map(e => (e.trim(), {
        direction: e.slice(0, 1),
        steps: parseInt(e.slice(1), 10)
    }));

wirePath1.id = 1;
wirePath2.id = 2;

const board = {};

let centralPort = { x: 0, y: 0 };

const tracePath = (wirePath) => {
    let pointer = Object.assign({}, centralPort);
    let totalSteps = 0;
    wirePath.forEach(wp => {
        switch (wp.direction) {
            case 'U':
                for (let index = 0; index < wp.steps; index++) {
                    pointer.y++;
                    board[`${pointer.y},${pointer.x}`] = board[`${pointer.y},${pointer.x}`] || {};
                    board[`${pointer.y},${pointer.x}`]['steps'] = Math.abs(pointer.x - centralPort.x) + Math.abs(pointer.y - centralPort.y);
                    board[`${pointer.y},${pointer.x}`][wirePath.id] = true;
                }
                break;
            case 'D':
                for (let index = 0; index < wp.steps; index++) {
                    pointer.y--;
                    board[`${pointer.y},${pointer.x}`] = board[`${pointer.y},${pointer.x}`] || {};
                    board[`${pointer.y},${pointer.x}`]['steps'] = Math.abs(pointer.x - centralPort.x) + Math.abs(pointer.y - centralPort.y);
                    board[`${pointer.y},${pointer.x}`][wirePath.id] = true;
                }
                break;
            case 'R':
                for (let index = 0; index < wp.steps; index++) {
                    pointer.x++;
                    board[`${pointer.y},${pointer.x}`] = board[`${pointer.y},${pointer.x}`] || {};
                    board[`${pointer.y},${pointer.x}`]['steps'] = Math.abs(pointer.x - centralPort.x) + Math.abs(pointer.y - centralPort.y);
                    board[`${pointer.y},${pointer.x}`][wirePath.id] = true;
                }
                break;
            case 'L':
                for (let index = 0; index < wp.steps; index++) {
                    pointer.x--;
                    board[`${pointer.y},${pointer.x}`] = board[`${pointer.y},${pointer.x}`] || {};
                    board[`${pointer.y},${pointer.x}`]['steps'] = Math.abs(pointer.x - centralPort.x) + Math.abs(pointer.y - centralPort.y);
                    board[`${pointer.y},${pointer.x}`][wirePath.id] = true;
                }
                break;
        }
    });
};

tracePath(wirePath1);
tracePath(wirePath2);

const solution = Math.min(...Object.values(board).filter(c => c['1'] && c['2']).map(c => c.steps));

console.log(solution);
