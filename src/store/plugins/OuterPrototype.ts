import type { PiniaPluginContext } from "pinia";

import { markRaw } from "vue";
import { router } from "@/router";

export default function OuterPrototype({ store }: PiniaPluginContext) {
  store.router = markRaw(router);
}
