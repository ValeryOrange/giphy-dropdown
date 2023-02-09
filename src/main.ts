import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

// TODO: fix all warnings and error from ts and Vetur
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());

app.mount('#app');
