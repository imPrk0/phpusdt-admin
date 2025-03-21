/**
 * Router configuration
 * @author Prk<code@imprk.me>
 */

import { createRouter, createWebHashHistory } from 'vue-router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
    easing: 'ease',
    speed: 500
});

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL), // 使用 Hash 路由的原因是尽量让用户不要过多的配置服务器
    routes: [
        {
            name: 'Root',
            path: '/',
            redirect: {
                name: 'Login'
            },
            meta: {
                title: '仪表盘'
            }
        },

        // 鉴权
        {
            name: 'Auth',
            path: '/auth',
            redirect: {
                name: 'Login'
            },
            component: () => import('@/layouts/auth/index.vue'),
            children: [
                {
                    name: 'Login',
                    path: 'login',
                    component: () => import('@/views/auth/login/index.vue')
                }
            ]
        }
    ]
});

router.beforeEach((to, from): void => {
    NProgress.start();
});

router.afterEach((): void => {
    NProgress.done();
});

router.onError((): void => {
    NProgress.done();
});

export default router;
