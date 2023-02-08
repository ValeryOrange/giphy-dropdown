<script setup lang="ts">
    import InputGiphy from '@/components/InputGiphy/InputGiphy.vue';
    import AnimatedLoader from '@/components/AnimatedLoader/AnimatedLoader.vue';
    import DropdownList from '@/components/DropdownList/DropdownList.vue';
    import { useMainStore } from '@/store';

    const store = useMainStore();
    const { isLoading, picList, setSearchStr } = store;
    function setUserInput(text: string) {
        setSearchStr(text);
  }
</script>

<template>
    <InputGiphy @userInputSet="setUserInput"/>
    <AnimatedLoader v-if="isLoading"/>
    <DropdownList v-else-if="picList.length"/>
</template>

<style scoped>
</style>
