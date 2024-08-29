// IMPORTS
import { createRouter, createWebHistory } from 'vue-router';
import GameView from '@/views/game-view.vue';

// ROUTER
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'game',
			component: GameView
		}
	]
});

// EXPORTS
export default router;