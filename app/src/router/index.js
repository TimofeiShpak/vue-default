import { createRouter, createWebHashHistory } from 'vue-router';

import BarChart from '@/components/BarChart.vue';

const routes = [
    { 
        path: '/', 
        name: 'BarChart',
        component: BarChart
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})