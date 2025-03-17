<script setup lang="ts">
/**
 * 鉴权页面布局
 * @author Prk<code@imprk.me>
 */
</script>

<template>
    <div class="prk-auth-layout table position-absolute h-full w-full">
        <div class="prk-auth-layout--content table-cell vertical-middle">
            <RouterView />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.prk-auth-layout {
    @media screen and (max-height: 366px), (max-width: 600px) {
        background: none;
    }

    &--content {
        @media screen and (max-height: 366px), (max-width: 600px) {
            vertical-align: top;
        }
    }
}
</style>
