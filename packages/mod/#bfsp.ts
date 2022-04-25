import { defineConfig } from "@bfchain/pkgm-bfsp";
export default defineConfig((info) => {
  const config: Bfsp.UserConfig = {
    name: "abc-w",
    exports: {
      ".": "./index.ts",
      "./sub": "./sub.ts",
      "./a/web": "./a#web.ts",
      "./a/node": "./a#node.ts",
      "./a/default": "./a#default.ts",
      "./a/prod": "./a#prod.ts",
      "./a/dev": "./a#dev.ts",
    },
    profiles: ["web", "node", "prod"],
    packageJson: {
      license: "MIT",
      author: "BFChainer",
      dependencies: {
        axios: "^0.26.1",
        lodash: "4.17.21",
        chalk: "5.0.1",
        commander: "9.2.0",
      },
      devDependencies: {
        tslib: "2.3.1",
      },
      peerDependencies: {
        yargs: "17.4.1",
        ora: "6.1.0",
      },
    },
    build: [
      {
        path: "index.ts",
        name: "a-web",
        exports: {
          ".": "./index.ts",
        },
        profiles: ["dev"],
      },
    ],
  };
  return config;
});
