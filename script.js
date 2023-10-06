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


class player {
    constructor(mark) {
        this.mark = mark;
    }
}

//2 players > type in name = new player > player1 picks mark >
//player 2 gets other mark

function selectMark(selectedMark) {
    const xmarkButton = document.getElementById('xmark');
    const omarkButton = document.getElementById('omark');

    xmarkButton.addEventListener('click', function() {
        const player1 = new player('X')
        const player2 = new player('O')

        console.log('Player 1 mark: ' + player1.mark);
        console.log('Player 2 mark: ' + player2.mark);
    });

    omarkButton.addEventListener('click', function() {
        const player1 = new player('O')
        const player2 = new player('X')
        
        console.log('Player 1 mark: ' + player1.mark);
        console.log('Player 2 mark: ' + player2.mark);
    });
};

selectMark();

// player clicks x/o > store mark > put mark on page
function createMark(mark) {
    const boxes = document.querySelectorAll('.boxes')


}

displayBoard();