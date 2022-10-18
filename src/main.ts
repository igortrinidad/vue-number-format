import { createApp } from 'vue'
import App from './App.vue'
import plugins from "./plugins"

const app = createApp(App)

// TODO: add type for plugin options in app.use
app.use(plugins, {})

app.mount('#app')
