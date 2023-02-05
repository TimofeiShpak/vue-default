import { createRouter, createWebHashHistory } from 'vue-router';

const modules = import.meta.glob('@/components/charts/*.vue', { eager: true })

export const chartRoutes = Object.keys(modules).map(file => {
    const component = modules[file];
    const name = /\/\w+\.vue/.exec(file)[0].replace(/^\//, '').replace(/\.\w+$/, '')
    return {
        path: '/' + name,
        name,
        component: component.default || component,
    }
});

const routes = [
    { 
        path: '/', 
        redirect: chartRoutes[0]
    }
].concat(chartRoutes)

export default createRouter({
    history: createWebHashHistory(),
    routes
})