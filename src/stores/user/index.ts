/**
 * User store
 * @author Prk<code@imprk.me>
 */

import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
    /**
     * 用户信息
     * @author Prk<code@imprk.me>
     */
    const userInfo = ref<null>(null);

    /**
     * 是否已经登录
     * @author Prk<code@imprk.me>
     */
    const hasLogin = computed<boolean>(
        (): boolean => false
    );

    return {
        userInfo, hasLogin
    };
}, {
    persist: true
});
