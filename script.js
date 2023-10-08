class player {
    constructor(mark) {
        this.mark = mark;
    }
}

const game = {
    gameboard: [0, 1, 2, 3, 4, 5, 6, 7, 8],
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
    
        //arrow function preserves this. to game function 
        xmarkButton.addEventListener('click', () => {
            this.player1 = new player('X')
            this.player2 = new player('O')
    
            game.updatePlayerText();
        });
    
        omarkButton.addEventListener('click', () => {
            this.player1 = new player('O')
            this.player2 = new player('X')
            
            game.updatePlayerText();
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
        const result = game.determineWinner();
        game.updateDesc(result);
    },
    determineWinner: function () {
        const winCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]; 

        for (const combos of winCombos) {
            const [a, b, c] = combos;
            if (this.gameboard[a] && this.gameboard[a] === this.gameboard [b] && this.gameboard[a] === this.gameboard[c]) {
                const result = this.gameboard[a];
                game.updateDesc(result);
                return result;
            }
        }

        for (let i = 0; i < this.gameboard.length; i++) {
            if (this.gameboard[i] !== 'X' && this.gameboard[i] !== 'O') {
                const result = null;
                game.updateDesc(result);
                return result;
            }
        }
        const result = 'draw';
        game.updateDesc(result);
        return result;
    },
    updateDesc: function (result) {
        const desc = document.querySelector('.desc');

        if (result === 'draw') {
            desc.textContent = "It's a draw!"
        } else if (result === 'X' || result ==='O') {
            desc.textContent = `${result} wins the game`
        } else {
            desc.textContent = 'Pick X or O';
        }
    },
    updatePlayerText: function() {
        const player1Text = document.getElementById('player1');
        const player2Text = document.getElementById('player2');

        player1Text.textContent = ('Player 1: ' + game.player1.mark);
        player2Text.textContent = ('Player 2: ' + game.player2.mark);
    },
    resetGame: function () {
        const resetGameButton = document.getElementById('resetGame');

        resetGameButton.addEventListener('click', () => {
            const player1Text = document.getElementById('player1');
            const player2Text = document.getElementById('player2');
    
            player1Text.textContent = ('Player 1');
            player2Text.textContent = ('Player 2');

            this.player1 = null;
            this.player2 = null;

            this.updateDesc('');
            this.currentPlayer = 'X';

            this.gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            const boxes = document.querySelectorAll('.boxes');
            boxes.forEach((box) => {
                box.textContent = '';
            });
        });
    }
}


game.selectMark();
game.displayBoard();
const result = game.determineWinner();
game.resetGame();