import { ref } from 'vue';
import { defineStore } from 'pinia';
const PATH = 'https://api.giphy.com/v1/gifs/search';
const API_KEY = 'WxdyYLhMuub9clDtbglE0bJkSBExzePj';
const DEFAULT_ERROR_MESSAGE = 'Oops! Something went wrong. Please, try again later.';

export const useMainStore = defineStore('main', () => {
  const picList = ref([]);
  const isLoading = ref(false);
  const errorMessage = ref('');
  const errorMessageType = ref('');

  function setErrorMessage(msg: string) {
    errorMessage.value = msg;
  }

  function setSearchStr(text: string) {
    getGiphys(text);
  }

  function setIsLoading(isWaiting: boolean) {
    isLoading.value = isWaiting;
  }

  function setErrorMessageType(type: string) {
    errorMessageType.value = type;
  }

  function getGiphys(str: string) {
    const url = `${PATH}?q=${str}&api_key=${API_KEY}`;
    setIsLoading(true);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((err) => {
      console.warn(err);
      setErrorMessage(DEFAULT_ERROR_MESSAGE);
      setErrorMessageType('error');
    })
    .finally(() => setIsLoading(false));
  }

  return {
    picList,
    isLoading,
    setSearchStr,
    setErrorMessage,
    errorMessage,
    setErrorMessageType,
    errorMessageType,
  };
});
