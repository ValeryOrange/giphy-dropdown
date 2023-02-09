<script setup lang="ts">
    import InputGiphy from '@/components/InputGiphy/InputGiphy.vue';
    import AnimatedLoader from '@/components/AnimatedLoader/AnimatedLoader.vue';
    import DropdownList from '@/components/DropdownList/DropdownList.vue';
    import { useMainStore } from '@/store';

    const store = useMainStore();
    const { setSearchStr, setErrorMessage } = store;
    function setUserInput(text: string) {
        setSearchStr(text);
    }
    function setInvalidMessage() {
        setErrorMessage('Your input is invalid.');
    }
</script>

<template>
    <InputGiphy
        @userInputSet="setUserInput"
        @invalidInput="setInvalidMessage"
    />
    <AnimatedLoader v-show="store.isLoading"/>
    <DropdownList v-if="store.picList.length && !store.isLoading"/>
    <p v-if="store.errorMessage">{{ store.errorMessage }}</p>
</template>

<style scoped>
</style>
