import type { RouteLocationNormalized } from "#vue-router";

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized) => {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    return navigateTo({ name: "under-construction" });
  }
});
