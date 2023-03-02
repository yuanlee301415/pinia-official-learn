<template>
  <h2>Getters</h2>
  <pre>count: {{ stateB.count }}</pre>
  <button @click="update1">Update count</button>
  <pre>doubleCount: {{ stateB.doubleCount }}</pre>

  <h2>访问其他 getter</h2>
  <pre>doublePlusOne:{{ stateB.doublePlusOne }}</pre>

  <h2>向 getter 传递参数</h2>
  <pre>doublePlus:{{ stateB.getPerCount(10) }}</pre>

  <h2>访问其他 store 的 getter</h2>
  <pre>getGreeting: {{ stateB.getGreeting }}</pre>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

import { useStateBStore } from "@/store/modules/stateB";

const stateB = useStateBStore();
function update1() {
  stateB.count++;
}

/**
 * 使用 setup() 时的用法
 */
console.log("count:", stateB.count);
console.log("doubleCount:", stateB.doubleCount);
console.log("doublePlusOne:", stateB.doublePlusOne);
console.log("getPerCount:", stateB.getPerCount(100));
console.log("getGreeting:", stateB.getGreeting);
stateB.count++;
console.log("count:", stateB.count);
console.log("doubleCount:", stateB.doubleCount);
console.log("doublePlusOne:", stateB.doublePlusOne);
console.log("getPerCount:", stateB.getPerCount(100));
console.log("getGreeting:", stateB.getGreeting);
</script>
