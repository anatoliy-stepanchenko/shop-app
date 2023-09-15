import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createNotivue } from 'notivue';

import App from './App.vue';
import router from './router';

import 'notivue/notifications.css'; // Only needed if using built-in notifications
import 'notivue/animations.css'; // Only needed if using built-in animations

const app = createApp(App);

app.use(createPinia());
app.use(router);

export const push = createNotivue(app);

app.mount('#app');
