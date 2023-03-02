import { defineStore } from "pinia";

/**
 * 自动推断类型
 */
export const useStateA1Store = defineStore("stateA1", {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      name: "Tome",
      age: 20,
      isAdmin: true,
      items: [] as any[],
      changed: false,
    };
  },
});

/**
 * 定义 `state` 的内部数据类型
 */
type UserInfo = {
  name: string;
  age: number;
};
export const useStateA2Store = defineStore("stateA2", {
  state: () => {
    return {
      userList: [] as UserInfo[],
      userInfo: null as UserInfo | null,
    };
  },
});

/**
 * 定义整个 `state` 对象的类型
 */
interface State {
  useList: UserInfo[];
  userInfo: UserInfo | null;
}
export const useStateA3Store = defineStore("stateA3", {
  state: (): State => {
    return {
      useList: [],
      userInfo: null,
    };
  },
});
