<script setup>

// IMPORTS
import './game.scss';
import Page from '@/components/layouts/page/page.vue';
import Board from '@/components/partials/board/board.vue';
import Moderator from '@/components/partials/moderator/moderator.vue';
import Actions from '@/components/partials/actions/actions.vue';
import Score from '@/components/partials/score/score.vue';
import Tooltip from '@/components/partials/tooltip/tooltip.vue';

</script>

<template>
  <Page class="game">
    <Tooltip class="game__tooltip" />
    <Moderator class="game__moderator" />
    <Board class="game__board" />
    <Actions class="game__actions" />
    <Score class="game__score" />
  </Page>
</template>
