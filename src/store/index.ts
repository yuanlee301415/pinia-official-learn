import type { App } from "vue";

import { createPinia } from "pinia";
import StaticPropotyPiniaPlugin from "@/store/plugins/StaticPropoty";
import OuterPrototype from "@/store/plugins/OuterPrototype";
import SubscribePininPlugin from "@/store/plugins/Subscribe";

export const pinia = createPinia();

export function setupStore(app: App<Element>) {
  pinia.use(StaticPropotyPiniaPlugin)
  pinia.use(OuterPrototype)
  pinia.use(SubscribePininPlugin)
  app.use(pinia);
}
