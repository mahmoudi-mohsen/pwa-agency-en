import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueKinesis from "vue-kinesis";
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(VueKinesis);
createApp(App).use(store).use(router).mount('#app')
