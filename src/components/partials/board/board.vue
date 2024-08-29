<script setup>

// IMPORTS
import './board.scss';
import gameStore from '../../../stores/game-store.js';

// WINNING COMBINATIONS
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

// GET CURRENT PLAYER
const getCurrentPlayer = () => {

  // RETURN
  return gameStore.state.currentPlayer;

};

// GET BOARD
const getBoard = () => {

  // RETURN
  return gameStore.state.board;

};

// GET STATUS
const getStatus = () => {

  // RETURN
  return gameStore.state.status;

};

// CHECK FOR WIN
const checkForWin = () => {

  // GET BOARD AND PLAYER
  const board = getBoard();
  const player = getCurrentPlayer();

  // LOOP OVER WINNING COMBINATIONS TO CHECK FOR WINNER
  const winner = winningCombinations.find(combination => {
    if (board[combination[0]] === player && board[combination[1]] === player && board[combination[2]] === player) return player;
  });

  // RETURN WINNER
  return winner;

};

// CHECK FOR DRAW
const checkForDraw = () => {

  // GET BOARD
  const board = getBoard();

  // GET EMPTY FIELDS
  const emptyFields = board.filter(field => {
    if (field === null) return true;
  });

  // CHECK FOR DRAW
  const isDraw = emptyFields.length ? false : true;

  // RETURN
  return isDraw;

};

// CHECK IF FIELD IS EMPTY
const checkIfFieldIsEmpty = (index) => {

  // RETURN
  return gameStore.state.board[index] === null ? true : false;

};

// HANDLE MOVE
const handleMove = (index) => {

  // GET STATUS AND CURRENT PLAYER
  const status = getStatus();
  const currentPlayer = getCurrentPlayer();

  // STOP IF GAME IS OVER
  if (status === 'winner' || status === 'draw') return;

  // CHECK IF FIELD IS EMPTY
  const fieldIsEmpty = checkIfFieldIsEmpty(index);

  // IF FIELD IS EMPTY
  if (fieldIsEmpty && (status === 'ready' || 'ongoing')) {

    // UPDATE STATUS AND BOARD
    gameStore.commit('updateStatus', { status: 'ongoing' });
    gameStore.commit('updateBoard', { index: index, player: currentPlayer });

    // CHECK FOR WIN AND DRAW
    const hasWinner = checkForWin();
    const isDraw = checkForDraw();

    // IF WE WAVE WINNER
    if (hasWinner) {

      // UPDATE WINNER, STATUS AND SCORE
      gameStore.commit('updateWinner', { player: currentPlayer });
      gameStore.commit('updateStatus', { status: 'winner' });
      gameStore.commit('updateScore', { player: currentPlayer });

    }

    // IF IT'S A DRAW
    else if (isDraw) {

        // UPDATE STATUS
        gameStore.commit('updateStatus', { status: 'draw' });

     }

    // IF WE HAVE NO WINNER AN IT'S NOT A DRAW
    else {

      // UPDATE PLAYER
      gameStore.commit('updatePlayer', { player: currentPlayer === 'X' ? 'O' : 'X' });

    }

  }

};

</script>

<template>
  <div class="board">
    <div class="board__field" v-for="index in 9" key="index" @click="handleMove(index - 1)">
      <img class="board__field-icon" v-if="gameStore.state.board[index - 1] === 'X'" src="/icons/icon-player-x.svg"/>
      <img class="board__field-icon" v-if="gameStore.state.board[index - 1] === 'O'" src="/icons/icon-player-o.svg"/>
    </div>
  </div>
</template>
