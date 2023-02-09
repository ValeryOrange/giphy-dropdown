<script setup lang="ts">
    export interface Props {
        text: string
        type?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        type: 'default',
    });
</script>

<template>
    <span class="userNotification" :class="type">
        {{ text }}
    </span>
</template>

<style scoped>
    .userNotification {
        border-radius: 6px;
        position: absolute;
        left: 15px;
        top: 65px;
        padding: 5px;
    }

    .userNotification.default {
        background-color: var(--vt-c-white);
        color: var(--vt-c-black);
        border: solid 1px var(--color-border);
    }

    .userNotification.error {
        background-color: var(--vt-c-red-darker);
        color: var(--vt-c-white);
    }

    .userNotification.success {
        background-color: var(--vt-c-green-dark);
        color: var(--vt-c-white);
    }

    @media (min-width: 400px) {
        .userNotification {
            left: 40px;
            top: 85px;
        }
    }
</style>
