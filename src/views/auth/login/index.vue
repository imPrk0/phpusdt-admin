<script setup lang="ts">
/**
 * 登录页面
 * @author Prk<code@imprk.me>
 */

import type { LoginForm } from '@/types/auth/login';
import type { FormInstance, FormRules } from 'element-plus';

// 他妈的表单
const ruleFormRef = ref<FormInstance>();

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
 * 规则表单
 * @author Prk<code@imprk.me>
 */
const form = reactive<LoginForm>({
    username: '',
    password: '',
    remember: false
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

        console.log('submit!')
    });
};
</script>

<template>
    <ElForm
        class="prk-form ml-auto mr-auto position-relative p-44px mb-28px overflow-hidden"
        ref="ruleFormRef"
        :model="form"
        :rules="rules"
    >
        <!-- 世界上最牛逼的标题 -->
        <div class="title mt-0 mb-38px">
            <h2 class="inline-block text-24px">
                登录到管理后台
            </h2>
        </div>

        <ElFormItem class="mb-22px" prop="username">
            <ElInput
                size="large"
                v-model="form.username"
                placeholder="登录用户名"
            />
        </ElFormItem>

        <ElFormItem class="mb-22px" prop="password">
            <ElInput
                size="large"
                v-model="form.password"
                placeholder="登录密码"
            />
        </ElFormItem>

        <ElCheckbox
            size="large"
            class="mr-0"
            v-model="form.remember"
            label="使我保持登录状态"
        />

        <ElFormItem class="mt-24px ml-0 mr-0 mb-0">
            <ElButton class="w-full" type="primary" size="large">
                登录
            </ElButton>
        </ElFormItem>
    </ElForm>
</template>

<style lang="scss" scoped>
.prk-form {
    width: calc(100% - 40px);
    min-Width: 32px;
    max-Width: 440px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, .2);

    @media screen and (max-height: 366px), (max-width: 600px) {
        margin: 24px auto 68px auto;
        padding: 24px;
        width: 100%;
        -webkit-box-shadow: none;
        box-shadow: none;
        border: 0;
    }

    .title {
        h2 {
            color: #1B1B1B;
            font-weight: bold;
        }
    }
}
</style>
