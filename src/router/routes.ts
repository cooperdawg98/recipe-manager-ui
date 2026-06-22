import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [
//   // * matches all URLs, the ? makes it optional so it will match / as well
//   // route("home", "./features/recipePage/recipePage.tsx"),
//   index("App.tsx"),
//   route("recipe", "./features/recipePage/recipePage.tsx"),
//   route("*?", "catchall.tsx"),
// ] satisfies RouteConfig;

export default [
  // 1. Use index() for the root path "/" to render App.tsx
  index("../App.tsx"),

  // 2. Remove the leading slash for defined sub-paths
  route("recipe", "../features/recipePage/recipePage.tsx"),
  route("recipes", "../features/recipePage/recipePage2.tsx"),

  // 3. Keep the wildcard catch-all strictly at the bottom without modifiers
  route("*", "../catchall.tsx"),
] satisfies RouteConfig;
