<script setup>

// IMPORTS
import './actions.scss';
import gameStore from '@/stores/game-store.js';

// HANDLE RESTART
const handleRestart = () => {

  // RESET GAME
  gameStore.commit('resetGame');

};

</script>

<template>
  <div class="actions">
    <button class="actions__button button" v-if="gameStore.state.status === 'winner'" @click="handleRestart()">
      RESTART
    </button>
    <button class="actions__button button" v-if="gameStore.state.status === 'draw'" @click="handleRestart()">
      RESTART
    </button>
    <p></p>
  </div>
</template>
