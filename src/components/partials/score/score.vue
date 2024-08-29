<script setup>

// IMPORTS
import './score.scss';
import gameStore from '@/stores/game-store.js';

</script>

<template>
  <div class="score">
    <div class="score__player">
      <img class="score__player-label" src="/icons/icon-player-x.svg"></img>
      <div class="score__player-points">
        <img class="score__player-points-stroke-group" v-for="score in parseInt(gameStore.state.score['X'] / 5)" src="/icons/icon-stroke-group.svg"/>
        <img class="score__player-points-strokes" v-for="score in parseInt(gameStore.state.score['X'] % 5)" src="/icons/icon-stroke.svg"/>
      </div>
    </div>
    <div class="score__player">
      <div class="score__player-points">
        <img class="score__player-points-strokes" v-for="score in parseInt(gameStore.state.score['O'] % 5)" src="/icons/icon-stroke.svg"/>
        <img class="score__player-points-stroke-group" v-for="score in parseInt(gameStore.state.score['O'] / 5)" src="/icons/icon-stroke-group.svg"/>
      </div>
      <img class="score__player-label" src="/icons/icon-player-o.svg"></img>
    </div>
  </div>
</template>
