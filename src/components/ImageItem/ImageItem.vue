<script setup lang="ts">
    const props = defineProps({
        original: String,
        gif: String,
        video: String,
        title: String,
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
        <picture>
            <source type="video/mp4" :srcset="video">
            <img
                loading="lazy"
                :src="gif"
                :alt="title"
                width="200"
            />
        </picture>
    </li>
</template>

<style scoped>
    .image {
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin-bottom: 5px;
    }
    .image:hover {
        cursor: pointer;
    }
    @media (min-width: 400px) {
        .image {
            margin-bottom: 15px;
        }
    }
</style>
