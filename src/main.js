
import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import Main from './views/Main.vue'
import About from './views/About.vue'
import Pricelist from './views/Pricelist.vue'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/price',
        component: Pricelist
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        } else {
            return { top: 0 };
        }
    }
});

createApp(App)
    .use(router)
    .mount('#app')
