import { defineStore } from "pinia";

export const useStateCStore = defineStore("stateC", {
  state: () => ({
    count: 0,
    userInfo: null,
  }),
  actions: {
    increment() {
      this.count++;
    },
    random() {
      this.count = (Math.random() * 100) | 0;
    },
    async login(useName: string, password: string) {
      const res = await loginAPI(useName, password);
      if (res.code !== 0) throw new Error(res.message);
      this.userInfo = res.data;
      return res;
    },
  },
});

async function loginAPI(
  useName: string,
  password: string
): Promise<{ code: number; data?: any; message?: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (useName !== "root" || password !== "123")
        reject("用户名或密码错误！");
      resolve({
        code: 0,
        data: {
          useName,
          password,
          time: Date.now(),
        },
      });
    }, Math.random() * 1500 + 500);
  });
}
