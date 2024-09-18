import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import NotFoundPageView from '@/views/NotFoundPageView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'notFound',
            component: NotFoundPageView
        }

    ]
});

export default router;