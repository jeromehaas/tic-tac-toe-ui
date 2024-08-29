// IMPORTS
import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import gameStore from '@/stores/game-store.js';

// CREATE APP
const app = createApp(App);

// SETUP ROUTER
app.use(router);

// SETUP STORE
app.use(gameStore);

// MOUNT APP
app.mount('#app');