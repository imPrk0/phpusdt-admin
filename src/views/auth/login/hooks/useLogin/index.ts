/**
 * useLogin 登录 hook
 * @author Prk<code@imprk.me>
 */

import type { LoginForm } from '@/types/auth/login';
import type { FormInstance, FormRules } from 'element-plus';

// TODO 如果未来要加注册，记得统一封装 hook

export const useLogin = () => {
    /**
     * 表单数据
     * @author Prk<code@imprk.me>
     */
    const form = reactive<LoginForm>({
        username: '',
        password: '',
        remember: false
    });

    /**
     * 校验规则
     * @author Prk<code@imprk.me>
     */
    const rules = reactive<FormRules<typeof form>>({
        username: [
            {
                validator: (rule: any, value: string, callback: any): void => {
                    if (!value) {
                        callback(new Error('请输入用户名'));
                        return void 0;
                    }

                    callback();
                },
                trigger: 'blur'
            }
        ],
        password: [
            {
                validator: (rule: any, value: string, callback: any): void => {
                    if (!value) {
                        callback(new Error('请输入密码'));
                        return void 0;
                    }

                    callback();
                },
                trigger: 'blur'
            }
        ],
    });

    /**
     * 提交表单
     * @author Prk<code@imprk.me>
     * 
     * @param {FormInstance | undefined} formElement 表单实例
     * 
     * @return {void} 不会返回任何信息
     */
    const submitForm = (formElement: FormInstance | undefined): void => {
        if (!formElement) return void 0;

        formElement.validate((valid: boolean = false): void => {
            if (!valid) return void 0;
            handleSubmit();
        });
    };

    // 等待中
    const loading = ref<boolean>(false);

    /**
     * 提交网络请求并表示登录成功
     * @author Prk<code@imprk.me>
     * 
     * @return {Promise<void>} 什么都不会返回
     */
    const handleSubmit = async (): Promise<void> => {
        if (loading.value) return void 0;
        loading.value = true;

        try {
            await new Promise((resolve) => {
                setTimeout((): void => {
                    console.log('登录成功');
                    resolve(void 0);
                }, 3000);
            });
        } finally {
            loading.value = false;
        }
    };

    return {
        form, rules, loading,
        submitForm
    };
};
