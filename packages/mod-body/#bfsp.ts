import { defineConfig } from "@bfchain/pkgm-bfsp";
export default defineConfig((info) => {
  const config: Bfsp.UserConfig = {
    name: "mod-body",
    exports: {
      ".": "./index.ts",
    },
    packageJson: {
      license: "MIT",
      author: "BFChainer",
      dependencies: {
        lodash: "4.17.21",
      },
      devDependencies: {
        tslib: "2.3.1",
      },
      peerDependencies: {
        ora: "6.1.0",
      },
    },
    build: [
      {
        outSubPath: "web",
      },
      {
        outSubPath: "node",
      },
    ],
  };
  return config;
});
