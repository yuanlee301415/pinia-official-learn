import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const PLUGINS_ROUTE: AppRouteRecordRaw = {
  path: "/plugins",
  name: "Plugins",
  redirect: "/plugins",
  component: LAYOUT,
  meta: {
    title: "插件",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "PluginsPage",
      component: () => import("@/views/plugins.vue"),
      meta: {},
    },
  ],
};

export default PLUGINS_ROUTE;
