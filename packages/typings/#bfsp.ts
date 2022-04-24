import { defineConfig } from "@bfchain/pkgm-bfsp";
export default defineConfig((info) => {
  const config: Bfsp.UserConfig = {
    name: "@abc-w/typings",
    exports: {
      ".": "./index.ts",
    },
    packageJson: {
      buildOptions: {
        path: "index.ts",
        profiles: ["web", "node"],
        format: { format: "cjs", ext: ".cjs" },
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
    },
    build: [
      {
        name: "a-node",
        exports: {
          ".": "./index.ts",
        },
      },
      {
        name: "a-default",
        exports: {
          ".": "./index.ts",
        },
      },
      {
        name: "a-prod",
        exports: {
          ".": "./index.ts",
        },
      },
      {
        name: "a-dev",
        exports: {
          ".": "./index.ts",
        },
      },
    ],
  };
  return config;
});
