import { App } from "./app";
import { args } from "./utils/argv";

new App({
  isDebug: args.debug,
  onlyAxe: args.onlyAxe,
  url: args.url || "http://localhost:8080",
}).run();
