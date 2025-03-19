/**
 * Application entry point
 * @author Prk<code@imprk.me>
 */

import './assets/main.css';

import 'virtual:uno.css';
import '@unocss/reset/sanitize/sanitize.css';
import '@unocss/reset/sanitize/assets.css';

import 'element-plus/theme-chalk/src/message.scss';
import 'element-plus/theme-chalk/src/message-box.scss';

import { createApp } from 'vue';
import App from './App.vue';
import stores from './stores';
import router from './router';

const app = createApp(App);

app.use(stores);
app.use(router);

app.mount('#app');
