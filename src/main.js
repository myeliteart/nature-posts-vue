import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// notifcations
import VueNotifications from 'vue-notifications'

import BaseButton from './components/Layouts/BaseButton.vue'
// import Profile from './components/Dashboard/Profile.vue'
// import Articles from './components/Dashboard/Articles.vue'
// import Add from './components/Dashboard/Add.vue'
import BaseDialog from './components/Layouts/BaseDialog.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.component('profile', Profile);
// app.component('articles', Articles);
// app.component('add-articles', Add);
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)
app.use(VueNotifications).mount('#app')
