import { createApp } from 'vue'
import App from './App.vue'
import VueNumberFormat from 'vue-number-format'

const app = createApp(App)

app.use(VueNumberFormat, {precision: 4})

app.mount('#app')