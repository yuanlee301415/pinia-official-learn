<template>
  <h2>直接访问和修改 state</h2>
  <pre>{{ stateA }}</pre>

  <h2>重置 state</h2>
  <button @click="resetA">Reset</button>
  <pre>{{ stateA }}</pre>

  <h2>变更 state</h2>
  <button @click="patch1">patch 方式1</button>
  <button @click="patch2">patch 方式2</button>
  <pre>{{ stateA }}</pre>

  <h2>替换 state</h2>
  <button @click="replace">Replace</button>
  <pre>{{ stateA }}</pre>

  <h2>订阅 state</h2>
  <h6>
    默认情况下，state subscription 会被绑定到添加它们的组件上(如果 store
    在组件的 setup()
    里面)。这意味着，当该组件被卸载时，它们将被自动删除。如果你想在组件卸载后依旧保留它们，请将
    { detached: true } 作为第二个参数，以将 state subscription 从当前组件中分离
  </h6>
</template>

<script lang="ts" setup>
import { useStateA1Store } from "@/store/modules/stateA";
const stateA = useStateA1Store();

/**
 * 直接访问和修改 state
 */
stateA.name = "newName";
stateA.age = 30;

/**
 * 重置 state
 */
function resetA() {
  stateA.$reset();
}

/**
 * 变更 state
 */
function patch1() {
  stateA.$patch({
    name: "Patch1 Name",
    age: 40,
    isAdmin: true,
    items: [],
    changed: false,
  });
}

function patch2() {
  stateA.$patch((state) => {
    state.name = "Patch2 Name";
    state.changed = true;
  });
}

/**
 * 替换 state
 */
function replace() {
  stateA.$state = {
    name: "Replace Name",
    age: 50,
    isAdmin: false,
    items: [1, 2, 3],
    changed: false,
  };
}

/**
 * 订阅 state
 */
stateA.$subscribe((mutation, state) => {
  console.log("mutation:", mutation);
  console.log("state:", state);
  window.sessionStorage.setItem("stateA", JSON.stringify(state));
});
</script>
