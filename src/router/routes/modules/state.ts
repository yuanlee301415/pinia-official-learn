import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const STATE_ROUTE: AppRouteRecordRaw = {
  path: "/state",
  name: "State",
  redirect: "/state",
  component: LAYOUT,
  meta: {
    title: "State",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "StatePage",
      component: () => import("@/views/state.vue"),
      meta: {},
    },
  ],
};

export default STATE_ROUTE;
