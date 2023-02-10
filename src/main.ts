import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

// TODO: fix all warnings and error from ts and Vetur
// TODO Check on a real phones and in browsers under Windows
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());

app.mount('#app');
