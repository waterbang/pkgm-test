import { defineWorkspace } from "@bfchain/pkgm-bfsw";
import typingsProject from "./packages/typings/#bfsp";
import modProject from "./packages/mod/#bfsp";
export default defineWorkspace(() => {
  const config: Bfsw.Workspace = {
    projects: [typingsProject,modProject],
  };
  return config;
});
