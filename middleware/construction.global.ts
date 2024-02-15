export default defineNuxtRouteMiddleware((to) => {
  if (
    process.env.NODE_ENV === "production" &&
    to.path !== "/under-construction" &&
    !to.path.includes("/st")
  ) {
    return navigateTo("/under-construction");
  }
});
