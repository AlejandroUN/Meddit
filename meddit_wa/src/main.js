import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as apolloProvider from './apollo.provider'
import "bootstrap/dist/css/bootstrap.min.css"

createApp(App).use(apolloProvider.provider).use(router).mount('#app')
