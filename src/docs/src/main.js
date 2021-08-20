import { createApp } from 'vue'
import App from './App.vue'
import VueNumberFormat from 'vue-number-format'
import 'prismjs/themes/prism-okaidia.css'
import Prism from './Prism'
const app = createApp(App)

app.use(VueNumberFormat, {precision: 2, prefix: ''})
app.component('Prism', Prism)

app.mount('#app')