import { createApp } from 'vue'
import App from './App.vue'
import VueNumberFormat from '@igortrindade/vue-number-format'
import 'prismjs/themes/prism-okaidia.css'
import Prism from './Prism.vue'
const app = createApp(App)

import LvButton from 'lv-button'

app.use(LvButton)
app.use(VueNumberFormat, {precision: 2, prefix: ''})
app.component('Prism', Prism)

app.mount('#app')