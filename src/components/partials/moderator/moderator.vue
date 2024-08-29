<script setup>

// IMPORTS
import './moderator.scss';
import gameStore from '@/stores/game-store.js';

</script>

<template>
  <div class="moderator">
    <div class="moderator__message" v-if="gameStore.state.status==='draw'">
      <p class="moderator__message-text paragraph--big">IT'S A DRAW!</p>
    </div>
    <div class="moderator__message" v-else-if="gameStore.state.status==='winner'">
      <img class="moderator__message-image" v-if="gameStore.state.winner === 'X'" src="/icons/icon-player-x.svg"
           alt="X">
      <img class="moderator__message-image" v-if="gameStore.state.winner === 'O'" src="/icons/icon-player-o.svg"
           alt="X">
      <p class="moderator__message-text paragraph--big">WON!</p>
    </div>
    <div class="moderator__message" v-else-if="gameStore.state.status === 'ongoing'">
      <p class="moderator__message-text paragraph--big">IT'S</p>
      <img class="moderator__message-image" v-if="gameStore.state.currentPlayer === 'X'" src="/icons/icon-player-x.svg"
           alt="X">
      <img class="moderator__message-image" v-if="gameStore.state.currentPlayer === 'O'" src="/icons/icon-player-o.svg"
           alt="X">
      <p class="moderator__message-text paragraph--big">TURN!</p>
    </div>
    <div class="moderator__message" v-else-if="gameStore.state.status === 'ready'">
      <img class="moderator__message-image" src="/icons/icon-player-x.svg" alt="X">
      <p class="moderator__message-text paragraph--big">STARTS!</p>
    </div>
  </div>
</template>
