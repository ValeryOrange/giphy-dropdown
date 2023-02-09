<script setup lang="ts">
    const props = defineProps({
        original: String,
        src: String,
    });
</script>

<template>
    <li>
        <img :src="src">
    </li>
</template>

<style scoped>
</style>
