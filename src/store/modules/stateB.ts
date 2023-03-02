import { defineStore } from "pinia";

import { useStateA1Store } from "@/store/modules/stateA";

export const useStateBStore = defineStore("stateB", {
  state: () => ({
    count: 1,
  }),
  getters: {
    doubleCount(): number {
      return this.count * 2;
    },
    doublePlusOne(): number {
      return this.doubleCount + 1;
    },
    getPerCount() {
      return (val: number) => this.count * val;
    },
    getGreeting(): string {
      const { name } = useStateA1Store();
      return `Hello, ${name}!，这是您第[${this.count}]次登录！`;
    },
  },
});
