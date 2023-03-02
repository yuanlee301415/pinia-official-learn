import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constant";

const CORE_CONCEPTS_ROUTE: AppRouteRecordRaw = {
  path: "/core-concepts",
  name: "CoreConcepts",
  redirect: "/core-concepts",
  component: LAYOUT,
  meta: {
    title: "定义 Store",
    hiddenChildrenInMenu: true,
  },
  children: [
    {
      path: "",
      name: "CoreConceptsPage",
      component: () => import("@/views/core-concepts.vue"),
      meta: {},
    },
  ],
};

export default CORE_CONCEPTS_ROUTE;
