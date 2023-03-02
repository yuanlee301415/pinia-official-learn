<template>
  <h2>useCounterStore</h2>

  <pre>{{ counter }}</pre>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/store/modules/counter";

const counter = useCounterStore();
console.log(counter);
</script>
