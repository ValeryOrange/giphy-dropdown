import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
  const searchStr = ref('');
  const picList = ref([]);
  const isLoading = ref(false);
  function setSearchStr(text: string) {
    searchStr.value = text;
  }

  return { searchStr, picList, isLoading, setSearchStr };
});
