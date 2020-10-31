import { createApp } from 'vue'
import App from './App.vue'
import devtools from './devtools';
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(devtools).mount('#app');