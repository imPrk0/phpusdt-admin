/**
 * 请求相关接口
 * @author Prk<code@imprk.me>
 */

import request from '@/utils/request';

/**
 * 请求登录接口
 * @author Prk<code@imprk.me>
 * 
 * @param {string} username 用户名
 * @param {string} password 密码
 * 
 * @return {Promise<boolean>} 返回请求结果
 */
export const authLogin = (
    username: string,
    password: string
): Promise<any> => request.postForm('', {
    username,
    password
}, {
    params: {
        action: 'auth.login'
    }
});
