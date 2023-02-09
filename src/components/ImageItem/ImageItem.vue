<script setup lang="ts">
    const props = defineProps({
        original: String,
        src: String,
    });
    const emit = defineEmits(['sendOriginal']);
    function onClick() {
        emit('sendOriginal', props.original);
    }
</script>

<template>
    <li
        class="image"
        @click="onClick"
    >
        <img :src="src"/>
    </li>
</template>

<style scoped>
    .image:hover {
        cursor: pointer;
    }
</style>
