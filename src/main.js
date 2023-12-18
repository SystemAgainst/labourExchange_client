import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import MainLayout from "@/layouts/User/MainLayoutUser.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const pinia = createPinia()
const app = createApp(App)

app.component('main-layout', MainLayout);
app.component('auth-layout', AuthLayout);


app.use(router)
app.use(pinia)

app.mount('#app')
