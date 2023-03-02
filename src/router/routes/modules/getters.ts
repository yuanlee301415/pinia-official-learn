import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const GETTERS_ROUTE: AppRouteRecordRaw = {
  path: "/getters",
  name: "Getters",
  redirect: "/getters",
  component: LAYOUT,
  meta: {
    title: "Getters",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "GettersPage",
      component: () => import("@/views/getters.vue"),
      meta: {},
    },
  ],
};

export default GETTERS_ROUTE;
