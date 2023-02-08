<script setup lang="ts">
    const PLACEHOLDER = "Search animated pics from Giphy";
    const EMIT_DELAY = 500;
    const emit = defineEmits(['userInputSet']);
    let timeoutId = 0;
    function emitInputValue(e: Event) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            emit('userInputSet', e?.target?.value);
        }, EMIT_DELAY);
    }
</script>

<template>
    <input
        @input="emitInputValue"
        :placeholder="PLACEHOLDER"
        class="giphySearch"
    />
</template>

<style scoped>
    .giphySearch {
        width: 100%;
        height: 40px;
        margin-bottom: 15px;
        padding: 5px;
        border: solid 1px var(--color-border);
        border-radius: 4px;
    }
</style>
