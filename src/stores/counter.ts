import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
  const searchStr = ref('');
  const picList = ref([]);
  const isLoading = ref(false);

  return { searchStr, picList, isLoading };
});
