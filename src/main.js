import '@/assets/main.css';
import '@mdi/font/css/materialdesignicons.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers';

createApp(App).use(router).mount('#app');

