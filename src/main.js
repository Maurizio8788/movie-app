import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from "pinia";

const pinia = createPinia()

const app = createApp(App);



app.provide("baseImageUrl", import.meta.env.VITE_API_IMAGE_PATH);

app.use(router)
app.use(pinia)
app.mount('#app')
