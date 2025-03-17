/**
 * 登录相关类型
 * @author Prk<code@imprk.me>
 */

/**
 * 登录表单类型
 * @author Prk<code@imprk.me>
 */
export interface LoginForm {
    /**
     * 登录用户名
     * @author Prk<code@imprk.me>
     */
    username: string;

    /**
     * 登录密码
     * @author Prk<code@imprk.me>
     */
    password: string;

    /**
     * 保持登录状态
     * @author Prk<code@imprk.me>
     */
    remember: boolean;
};
