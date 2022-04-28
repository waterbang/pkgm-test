import { defineConfig } from "@bfchain/pkgm-bfsp";
export default defineConfig((info) => {
  const config: Bfsp.UserConfig = {
    name: "mod-face",
    exports: {
      ".": "./index.ts",
    },
    deps: ["mod-body"],
    profiles: ["web", "node"],
    packageJson: {
      license: "MIT",
      author: "BFChainer",
      dependencies: {
        commander: "9.2.0",
      },
      devDependencies: {
        tslib: "2.3.1",
      },
      peerDependencies: {
        yargs: "17.4.1",
      },
    },
    build: [
      {
        outSubPath: "face",
      },
    ],
  };
  return config;
});
