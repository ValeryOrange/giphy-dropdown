<script setup lang="ts">
    import type { PropType } from 'vue';
    import type { PicListType } from '@/types';
    import ImageItem from '../ImageItem/ImageItem.vue';
    // TODO The last line of images should be aligned to the left
    const props = defineProps({
        images: Object as PropType<PicListType>,
    });
    const emit = defineEmits(['sendOriginal']);
    function sendOriginal(url: string) {
        emit('sendOriginal', url);
    }
</script>

<template>
    <div class="dropdown">
        <ul class="image-list">
            <ImageItem
                v-for="image in images"
                :key="image.id"
                :video="image.video"
                :gif="image.gif"
                :original="image.original"
                :title="image.title"
                @sendOriginal="sendOriginal"
            />
        </ul>
    </div>
</template>

<style scoped>
    .dropdown {
        width: 100%;
        max-height: calc(100vh - 105px);
        overflow: scroll;
        border: solid 1px var(--color-border);
        border-radius: 4px;
        padding: 15px 10px;
    }

    .image-list {
        display: flex;
        max-width: 100%;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        list-style: none;
        justify-content: space-around;
    }

    @media (min-width: 400px ) {
        .dropdown {
            max-height: 500px;
            padding: 30px 40px;
        }
    }
</style>
