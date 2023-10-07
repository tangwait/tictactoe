// store gameboard as an object >
let mark = ''

const displayBoard = () => {
    const game = document.querySelector('.game');

    gameboard = [1, 2, 3,
                4, 5, 6,
                7, 8, 9];

    for (let Gridboxes = 0; Gridboxes < 9; Gridboxes++) {
        const div = document.createElement('div');
        div.classList.add('boxes');
        game.appendChild(div);

        div.addEventListener('click', createMark);
    }
}

let player1, player2;

class player {
    constructor(mark) {
        this.mark = mark;
    }
    
    getMark() {
        console.log(this.mark);
    }
}

function selectMark() {
    const xmarkButton = document.getElementById('xmark');
    const omarkButton = document.getElementById('omark');

    xmarkButton.addEventListener('click', function() {
        player1 = new player('X')
        player2 = new player('O')

        console.log('Player 1 mark: ' + player1.mark);
        console.log('Player 2 mark: ' + player2.mark);
    });

    omarkButton.addEventListener('click', function() {
        player1 = new player('O')
        player2 = new player('X')
        
        console.log('Player 1 mark: ' + player1.mark);
        console.log('Player 2 mark: ' + player2.mark);
    });
}

selectMark();

// player clicks x/o > store mark > put mark on page
function createMark(mark) {
    const boxes = document.querySelectorAll('.boxes')


}

displayBoard();