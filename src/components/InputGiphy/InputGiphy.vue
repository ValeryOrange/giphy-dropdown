<script setup lang="ts">
    const props = defineProps({
        text: String,
    });
    const PLACEHOLDER = "Search animated pics from Giphy";
    const EMIT_DELAY = 500;
    const emit = defineEmits([
        'userInputSet',
        'invalidInput',
        'clearNotification',
        'clearPicList',
    ]);
    let timeoutId = 0;
    function emitInputValue(e: Event) {
        emit('clearNotification');
        emit('clearPicList');
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            const el = e?.target;
            if (el) {
                if (el.checkValidity()) {
                    emit('userInputSet', el.value);
                } else {
                    emit('invalidInput');
                }
            }
        }, EMIT_DELAY);
    }
</script>

<template>
    <input
        :placeholder="PLACEHOLDER"
        :value="text"
        pattern="^[a-zA-Z0-9\s]+$"
        class="giphySearch"
        @input="emitInputValue"
    />
</template>

<style scoped>
    .giphySearch {
        width: 100%;
        height: 40px;
        margin-bottom: 30px;
        padding: 5px;
        border: solid 1px var(--color-border);
        border-radius: 4px;
    }
</style>
