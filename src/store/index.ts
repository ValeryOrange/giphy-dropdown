import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { GifType, IImages, PicListType } from '@/types';

const PATH = 'https://api.giphy.com/v1/gifs/search';
const API_KEY = 'WxdyYLhMuub9clDtbglE0bJkSBExzePj';
const DEFAULT_ERROR_MESSAGE = 'Oops! Something went wrong. Please, try again later.';
const EMPTY_LIST_MESSAGE = 'Nothing found for your request';

export const useMainStore = defineStore('main', () => {
  const picList = ref<PicListType>([]);
  const isLoading = ref(false);
  const errorMessage = ref('');
  const errorMessageType = ref('');
  const searchStr = ref('');

  function setErrorMessage(msg: string) {
    errorMessage.value = msg;
  }

  function setSearchStr(text: string) {
    searchStr.value = text;
    if (text.length) {
      getGiphys(text);
    }
  }

  function setIsLoading(isWaiting: boolean) {
    isLoading.value = isWaiting;
  }

  function setErrorMessageType(type: string) {
    errorMessageType.value = type;
  }

  function setPicList(list: PicListType) {
    picList.value = list;
  }

  function getGiphys(str: string) {
    const url = `${PATH}?q=${str}&api_key=${API_KEY}`;
    setIsLoading(true);
    fetch(url)
    .then(res => res.json())
    .then(({ data }: {data: GifType}) => {
      /**
       * TODO realize pagination and infinite scroll
       */
      if (!data.length) {
        setErrorMessage(EMPTY_LIST_MESSAGE);
        setErrorMessageType('default');
        return;
      }
      const pics = data.map(({ id, title, images }: {title: string, id: string, images: IImages}) => {
        return {
          id,
          title,
          video: images.fixed_width.mp4,
          gif: images.fixed_width.url,
          original: images.original.mp4,
        };
      });
      setPicList(pics);
    })
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
    setPicList,
    searchStr,
  };
});
