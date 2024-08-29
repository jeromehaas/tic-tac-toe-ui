<script setup>

// IMPORTS
import './game.scss';
import Page from '@/components/layouts/page/page.vue';
import Board from '@/components/partials/board/board.vue';
import Moderator from '@/components/partials/moderator/moderator.vue';

</script>

<template>
  <Page class="game">
    <Moderator class="game__moderator" />
    <Board class="game__board" />
  </Page>
</template>
