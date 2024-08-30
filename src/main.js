import { createApp } from 'vue'
import App from './App.vue'
import SignupForm from './components/SignupForm.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import LoginForm from './components/LoginForm.vue'

import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
          { path: '/', component: SignupForm },
          { path:'/SignupForm', component:SignupForm},

          { path:'/LoginForm', component:LoginForm},
          { path:'/ForgotPassword', component:ForgotPassword}

         ]
    });
    export default router

createApp(App).use(router).mount('#app')
