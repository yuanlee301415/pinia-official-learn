<template>
  <h2>Basic</h2>
  <pre>Secret: {{ state.secret }}</pre>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import {useStateDStore} from "@/store/modules/stateD";

const state = useStateDStore()
console.log(state.secret)
</script>
