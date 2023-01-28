import { createRouter, createWebHashHistory } from 'vue-router';

import CheckStore from '../components/CheckStore.vue';
import Page from '../components/Page.vue';

const routes = [
    { 
        path: '/', 
        name: 'CheckStore',
        component: CheckStore
    },
    {
        path: '/page', 
        name: 'Page',
        component: Page 
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})