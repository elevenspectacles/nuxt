export default defineNuxtRouteMiddleware((to) => {
  if (
    process.env.NODE_ENV === "production" &&
    to.path !== "/under-construction" &&
    !(to.path.indexOf("/st") > -1)
  ) {
    return navigateTo("/under-construction");
  }
});
