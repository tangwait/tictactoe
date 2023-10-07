class player {
    constructor(mark) {
        this.mark = mark;
    }

    getMark() {
        console.log(this.mark);
    }
}

const game = {
    gameboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    currentPlayer: 'X',
    player1: null,
    player2: null,
    displayBoard: function () {
        const gameContainer = document.querySelector('.gameContainer');
    
        for (let Gridboxes = 0; Gridboxes < 9; Gridboxes++) {
            const div = document.createElement('div');
            div.classList.add('boxes');
            gameContainer.appendChild(div);
    
            div.addEventListener('click', this.createMark);
        }
    },
    selectMark: function () { 
        const xmarkButton = document.getElementById('xmark');
        const omarkButton = document.getElementById('omark');
    
        xmarkButton.addEventListener('click', function() {
            this.player1 = new player('X')
            this.player2 = new player('O')
    
            console.log('Player 1 mark: ' + this.player1.mark);
            console.log('Player 2 mark: ' + this.player2.mark);
        });
    
        omarkButton.addEventListener('click', function() {
            this.player1 = new player('O')
            this.player2 = new player('X')
            
            console.log('Player 1 mark: ' + this.player1.mark);
            console.log('Player 2 mark: ' + this.player2.mark);
        });
    },
    createMark: function (event) {
        const selectedBox = event.target;
        const selectedBoxIndex = Array.from(selectedBox.parentNode.children).indexOf(selectedBox);
    
        if (game.gameboard[selectedBoxIndex] === 'X' || game.gameboard[selectedBoxIndex] === 'O') {
            return;        
        }
        game.gameboard[selectedBoxIndex] = game.currentPlayer;
        selectedBox.textContent = game.currentPlayer;
        game.currentPlayer = game.currentPlayer === 'X' ? 'O' : 'X';
        game.determineWinner();
    },
    determineWinner: function () {
        const winCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]; 
    
        let draw = true;

        for (const combos of winCombos) {
            const [a, b, c] = combos;
            if (this.gameboard[a] && this.gameboard[a] === this.gameboard [b] && this.gameboard[a] === this.gameboard[c]) {
                return this.gameboard[a];
            }
        }

        for (let i = 0; i < this.gameboard.length; i++) {
            if (this.gameboard[i] !== 'X' && this.gameboard[i] !== 'O') {
                return 'draw';
            }
        }
        return null;
    },
    updateDesc: function (result) {
        const desc = document.querySelector('.desc');

        if (result === 'draw') {
            desc.textContent = "It's a draw!"
        } else if (result) {
            desc.textContent = `${result} wins the game`
        } else {
            desc.textContent = '';
        }
    },
    resetGame: function () {
        const resetGameButton = document.getElementById('resetGame');

        resetGameButton.addEventListener('click', () => {
            this.player1 = null;
            this.player2 = null;
            this.updateDesc();
            this.currentPlayer = 'X';

            this.gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            const boxes = document.querySelectorAll('.boxes');
            boxes.forEach((box) => {
                box.textContent = '';
            });

            this.updateDesc();
        });
    }
}

// if 3 in a row > determine winner or tie or gameOver >
// updateDesc > resetGame

//after every mark > run determineWinner


game.selectMark();
game.displayBoard();
const result = game.determineWinner();
game.updateDesc(result);
game.resetGame();