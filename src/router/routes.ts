import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

/* 
  Note: 
  If a newly added/adjusted route definition is not showing up in browser,
  refresh vite and hard delete the browser's cache (on safari: CMD+OPTION+e
  then refresh, some browsers have hard refresh with CTRL+SHIFT+R).

  Vite may be keeping a stale cache of react router's manifest (look up
  browser-manifest in page source and see that its out of date).
*/

export default [
  // Use index() for the root path "/" to render App.tsx
  index("../App.tsx"),

  ...prefix("recipe", [
    route(":recipeId", "../features/recipePage/recipePage.tsx"),

    // Recipe catchall
    // Should only be reached if no "recipeId" is provided in url
    route("*", "../features/recipePage/recipeCatchAll.tsx"),
  ]),
  route("recipes", "../features/recipePage/recipePage2.tsx"),

  // Wildcard route match sends all unmatched route requests to the catch all page
  route("*", "../catchall.tsx"),
] satisfies RouteConfig;
