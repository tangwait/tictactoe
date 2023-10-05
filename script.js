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
    constructor(name, mark) {
        this.name = name;
        this.mark = mark;
    }
}

//2 players > type in name = new player > player1 picks mark >
//player 2 gets other mark

function selectMark(selectedMark) {
    const xmark = document.querySelector('.xmark')
    const omark = document.querySelector('.omark');

    if (selectedMark === 'X') {
        mark = 'X';
        xmark.style.display = 'none';
        xmark.style.display = 'block';
    } else if (selectedMark === 'O') {
        mark = 'O';
        omark.style.display = 'none';
        omark.style.display = 'block';
    };
};

// player clicks x/o > store mark > put mark on page
function createMark(mark) {
    const boxes = document.querySelectorAll('.boxes')


}

displayBoard();