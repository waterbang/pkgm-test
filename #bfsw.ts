import { defineWorkspace } from "@bfchain/pkgm-bfsw";
import modBody from "./packages/mod-body/#bfsp";
import modFace from "./packages/mod-face/#bfsp";
import typsings from "./packages/typings/#bfsp";
export default defineWorkspace(() => {
  const config: Bfsw.Workspace = {
    projects: [modBody, modFace, typsings],
  };
  return config;
});
