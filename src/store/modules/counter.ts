import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  function add() {
    count.value++;
  }

  return {
    count,
    add,
  };
});
