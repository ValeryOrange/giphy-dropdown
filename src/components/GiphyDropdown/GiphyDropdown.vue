<script setup lang="ts">
    import InputGiphy from '@/components/InputGiphy/InputGiphy.vue';
    import AnimatedLoader from '@/components/AnimatedLoader/AnimatedLoader.vue';
    import DropdownList from '@/components/DropdownList/DropdownList.vue';
</script>

<template>
    <InputGiphy />
    <AnimatedLoader />
    <DropdownList />
</template>

<style scoped>
    .dropdown-list {
        width: 100%;
        max-height: 100px;
        overflow: scroll;
        border: solid 1px var(--color-border);
        border-radius: 4px;
    }
</style>
