import type { App } from "vue";

import { createPinia } from "pinia";
import SecretPiniaPlugin from "@/store/plugins/secret";

export const pinia = createPinia();

export function setupStore(app: App<Element>) {
  pinia.use(SecretPiniaPlugin)
  app.use(pinia);
}
