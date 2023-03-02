import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const ACTIONS_ROUTE: AppRouteRecordRaw = {
  path: "/actions",
  name: "Actions",
  redirect: "/actions",
  component: LAYOUT,
  meta: {
    title: "Actions",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "ActionsPage",
      component: () => import("@/views/actions.vue"),
      meta: {},
    },
  ],
};

export default ACTIONS_ROUTE;
