import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')

// put back menubar as an include to app.vue, app.vue is the container that also handles the theme specific stuff
// each component will handle 