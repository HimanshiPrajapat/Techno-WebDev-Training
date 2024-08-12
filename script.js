document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset');
    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellClick(event) {
        const cell = event.target;
        const index = cell.getAttribute('data-index');

        if (gameState[index] !== '' || checkWin()) {
            return;
        }

        gameState[index] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWin()) {
            setTimeout(() => alert(`Player ${currentPlayer} wins!`), 100);
        } else if (gameState.every(cell => cell !== '')) {
            setTimeout(() => alert('It\'s a draw!'), 100);
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWin() {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return gameState[index] === currentPlayer;
            });
        });
    }

    function resetGame() {
        gameState = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        cells.forEach(cell => cell.textContent = '');
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', resetGame);
});
