import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as apolloProvider from './apollo.provider'
import "bootstrap/dist/css/bootstrap.min.css"
import store from '@/store/store'

createApp(App).use(apolloProvider.provider).use(router).use(store).mount('#app')
