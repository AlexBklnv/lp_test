import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('../components/index'),
        },
        {
            path: '/im:id',
            name: 'im',
            component: () => import('../components/Dialog'),
        }
    ]
})