<script setup lang="ts">
    import InputGiphy from '@/components/InputGiphy/InputGiphy.vue';
    import AnimatedLoader from '@/components/AnimatedLoader/AnimatedLoader.vue';
    import DropdownList from '@/components/DropdownList/DropdownList.vue';
    import UserNotification from '@/components/UserNotification/UserNotification.vue';
    import { useMainStore } from '@/store';

    const INVALID_INPUT_MESSAGE = 'Your input is invalid';

    const store = useMainStore();
    const { setSearchStr, setErrorMessage, setErrorMessageType } = store;
    function setUserInput(text: string) {
        setSearchStr(text);
    }
    function setInvalidMessage(msg: string) {
        setErrorMessage(msg);
        setErrorMessageType('error');
    }
</script>

<template>
    <InputGiphy
        @userInputSet="setUserInput"
        @invalidInput="setInvalidMessage(INVALID_INPUT_MESSAGE)"
        @clearNotification="setInvalidMessage('')"
    />
    <AnimatedLoader v-show="store.isLoading"/>
    <DropdownList v-if="store.picList.length && !store.isLoading"/>
    <UserNotification
        v-if="store.errorMessage"
        :text="store.errorMessage"
        :type="store.errorMessageType"
    />
</template>

<style scoped>
</style>
