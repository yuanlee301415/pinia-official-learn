import type { ComponentPublicInstance, FunctionalComponent } from "vue";
import type { Router } from "vue-router";

import 'pinia'

declare global {
  const __APP_VERSION__: string;
  const __APP_BUILD_TIME__: string;
  const __APP_INFO__: {
    name: string;
    version: string;
    dependencies: Record<string, string>;
    devDependencies: Record<string, string>;
  };

  declare type Recordable<T = any> = Record<string, T>;

  declare type Nullable<T> = T | null;
}

declare module "vue" {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}

declare module 'pinia' {
  export interface PiniaCustomProperties {
    staticPrototype: string
    router: Router
  }
}