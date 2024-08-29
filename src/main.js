// IMPORTS
import { createApp } from 'vue';
import App from './app.vue';
import router from './router';

// CREATE APP
const app = createApp(App);

// SETUP ROUTER
app.use(router);

// SETUP STORE
app.use(gameStore);

// MOUNT APP
app.mount('#app');