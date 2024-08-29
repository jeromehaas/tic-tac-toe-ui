<script setup>

// IMPORTS
import './tooltip.scss';
import gameStore from '@/stores/game-store.js';
import { onMounted } from 'vue';

// ON MOUNT
onMounted(() => {

  // ADD EVENT LISTENER FOR KEY-DOWN
  window.addEventListener('keydown', handleReset);

});

// HANDLE RESET
const handleReset = (event) => {

  // IF ESCAPE-KEY IS PRESSED -> RESET GAME AND SCORE
  if (event.key === 'Escape') {
    gameStore.commit('resetScore');
    gameStore.commit('resetGame');
  }

};

</script>

<template>
  <div class="tooltip">
    <p class="tooltip__message paragraph--small">PRESS</p>
    <p class="tooltip__key paragraph--small">ESC</p>
    <p class="tooltip__message paragraph--small">TO RESET THE GAME AND THE SCORE!</p>
  </div>
</template>
