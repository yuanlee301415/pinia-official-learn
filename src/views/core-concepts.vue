<template>
  <h2>使用 Store</h2>

  <button @click="add">add</button>
  <pre>count:{{ count }}</pre>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/store/modules/counter";
import { storeToRefs } from "pinia";

const state = useCounterStore();
console.log(state);

/**
 * 使用 Store
 */
const { count } = storeToRefs(useCounterStore());
const { add } = state;
</script>
