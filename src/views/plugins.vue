<template>
  <h2>Basic</h2>
  <pre>Secret: {{ state.staticPrototype }}</pre>
</template>

<script lang="ts" setup>
import { useStateDStore } from "@/store/modules/stateD";

const state = useStateDStore();
console.log("staticPrototype:", state.staticPrototype);
console.log("router:", state.router);
// state.router.push('/') // to home page
</script>
