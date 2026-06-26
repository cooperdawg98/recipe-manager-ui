import { type Config } from "@react-router/dev/config";

export default {
  appDirectory: "src/router",
  ssr: false,
  // routeDiscovery: { mode: "initial" }, // Disable lazy discovery (include all routes initially)
} satisfies Config;
