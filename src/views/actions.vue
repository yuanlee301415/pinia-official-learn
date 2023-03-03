<template>
  <h2>Actions</h2>
  <button @click="state.increment()">Increment</button>
  <button @click="state.random()">random</button>
  <pre>count: {{ state.count }}</pre>

  <h4>异步 Action</h4>
  <input type="text" v-model="userName" placeholder="root" />
  <input type="text" v-model="password" placeholder="123" />
  <button @click="login">Login</button>
  <pre>userInfo: {{ state.userInfo }}</pre>

  <h2>订阅 action</h2>
  Message:
  <pre>{{ message?.join("\n") }}</pre>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { useStateCStore } from "@/store/modules/stateC";

const state = useStateCStore();

/**
 * 异步 Action
 */
const userName = ref("root");
const password = ref("123");
function login() {
  state.login(userName.value, password.value);
}

/**
 * 订阅 action
 */
const message = ref();
state.$onAction(({ name, after, args, onError }) => {
  const startTime = Date.now();
  message.value = [`Start ${name} with params: ${args}`];
  message.value.push("Loading...");

  after(function (result) {
    message.value.pop();
    message.value.push(`Finished ${name} after ${Date.now() - startTime} ms.`);
    message.value.push(`Result:`);
    message.value.push(`${JSON.stringify(result, null, 2)}`);
  });

  onError(function (error) {
    message.value.push(`Failed ${name}.`);
    message.value.push(`Error:`);
    message.value.push(`${JSON.stringify(error, null, 2)}`);
  });
});
</script>
