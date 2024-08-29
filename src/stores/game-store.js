// IMPORTS
import Vuex from 'vuex';
import localstoragePlugin from '@/plugins/localstorage-plugin.js';

// SETUP STORE
const gameStore = new Vuex.Store({
	state: {
		status: 'ready',
		currentPlayer: 'X',
		board: Array(9).fill(null),
		winner: null,
		score: {
			'X': 0,
			'O': 0
		}
	},
	mutations: {
		updateBoard: (state, { index, player }) => {
			state.board[index] = player;
		},
		updatePlayer: (state, { player }) => {
			state.currentPlayer = player;
		},
		updateWinner: (state, { player }) => {
			state.winner = player;
		},
		updateStatus: (state, { status }) => {
			state.status = status;
		},
		updateScore: (state, { player }) => {
			state.score[player] = state.score[player] + 1;
		},
		resetGame: (state) => {
			state.status = 'ready';
			state.currentPlayer = 'X';
			state.board = Array(9).fill(null);
			state.winner = null;
		},
		resetScore: (state) => {
			state.score['X'] = 0;
			state.score['O'] = 0;
		}
	},
	plugins: [localstoragePlugin]
});

// EXPORTS
export default gameStore;
