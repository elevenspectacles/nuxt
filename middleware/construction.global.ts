export default defineNuxtRouteMiddleware((to) => {
  if (
    process.env.NODE_ENV === "production" &&
    to.path !== "/under-construction"
  ) {
    return navigateTo("/under-construction");
  }
});
