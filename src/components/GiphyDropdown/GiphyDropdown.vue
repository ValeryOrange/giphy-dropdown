<script setup lang="ts">
    import InputGiphy from '@/components/InputGiphy/InputGiphy.vue';
    import AnimatedLoader from '@/components/AnimatedLoader/AnimatedLoader.vue';
    import DropdownList from '@/components/DropdownList/DropdownList.vue';
    import UserNotification from '@/components/UserNotification/UserNotification.vue';
    import { useMainStore } from '@/store';

    const INVALID_INPUT_MESSAGE = 'Your input is invalid';

    const store = useMainStore();
    const {
        setSearchStr,
        setErrorMessage,
        setErrorMessageType,
        setPicList,
    } = store;
    function setUserInput(text: string) {
        setSearchStr(text);
    }
    function setInvalidMessage(msg: string) {
        setErrorMessage(msg);
        setErrorMessageType('error');
    }

    function clearErrorMessage() {
        setErrorMessage('');
        setErrorMessageType('');
    }

    function resetPicList() {
        setPicList([]);
    }
</script>

<template>
    <InputGiphy
        @userInputSet="setUserInput"
        @invalidInput="setInvalidMessage(INVALID_INPUT_MESSAGE)"
        @clearNotification="clearErrorMessage"
        @clearPicList="resetPicList"
    />
    <AnimatedLoader v-show="store.isLoading"/>
    <DropdownList v-show="store.picList.length && !store.isLoading"/>
    <UserNotification
        v-show="store.errorMessage"
        :text="store.errorMessage"
        :type="store.errorMessageType"
    />
</template>

<style scoped>
</style>
