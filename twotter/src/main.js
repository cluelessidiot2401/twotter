import { createApp } from 'vue'
import App from './App.vue'
import { devtools } from './devtools';
import router from './router'

createApp(App).use(router).use(devtools).mount('#app');