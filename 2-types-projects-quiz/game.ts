/**
 * Let's make a game 🕹
 */

interface Position {
    x: number;
    y: number;
}

interface Move {
    (str: 'up' | 'down' | 'left' | 'right') : void;
}

const position: Position = {
    x : 0,
    y : 0
}

const move: Move = (str) => {
    switch(str){
        case 'up':
            position.y += 1;
            break;
        case 'down':
            position.y -= 1;
            break;
        case 'left':
            position.x -= 1;
            break;
        case 'right':
            position.x += 1;
            break;
        default:
            throw new Error('not defined');
    }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

