// ../../../project/pkgm/packages/bfsw/dist/main/src/index.mjs
var defineWorkspace = (cb) => {
  return cb();
};

// ../../../project/pkgm/packages/bfsp/dist/main/src/index.mjs
var defineConfig = (cb) => {
  new Error().stack;
  return {
    ...cb({
      mode: {}.mode?.startsWith("prod") ? "production" : "development"
    }),
    relativePath: "./"
  };
};

// bfsp-wrapper:./packages/typings/#bfsp#
var bfsp_default = defineConfig((info) => {
  const config = {
    name: "@abc-w/typings",
    exports: {
      ".": "./index.ts"
    },
    packageJson: {
      license: "MIT",
      author: "BFChainer"
    }
  };
  return config;
});

// bfsp-wrapper:D:\Users\Desktop\abc-w\packages\typings\#bfsp.ts
var newDefault = Object.assign(bfsp_default ?? {}, { relativePath: "./packages/typings" });
var bfsp_default2 = newDefault;

// bfsp-wrapper:./packages/mod/#bfsp#
var bfsp_default3 = defineConfig((info) => {
  const config = {
    name: "abc-w",
    exports: {
      ".": "./index.ts",
      "./sub": "./sub.ts",
      "./a/web": "./a#web.ts",
      "./a/node": "./a#node.ts",
      "./a/default": "./a#default.ts",
      "./a/prod": "./a#prod.ts",
      "./a/dev": "./a#dev.ts"
    },
    profiles: ["default"],
    packageJson: {
      license: "MIT",
      author: "BFChainer",
      dependencies: {
        axios: "^0.26.1",
        lodash: "4.17.21",
        chalk: "5.0.1",
        commander: "9.2.0"
      },
      devDependencies: {
        tslib: "2.3.1"
      },
      peerDependencies: {
        yargs: "17.4.1",
        ora: "6.1.0"
      }
    },
    build: [
      {
        name: "a-web",
        exports: {
          ".": "./index.ts"
        },
        profiles: ["prod"]
      },
      {
        name: "a-node",
        exports: {
          ".": "./index.ts"
        },
        profiles: ["dev"]
      },
      {
        name: "a-default",
        exports: {
          ".": "./index.ts"
        }
      },
      {
        name: "a-prod",
        exports: {
          ".": "./index.ts"
        }
      },
      {
        name: "a-dev",
        exports: {
          ".": "./index.ts"
        }
      }
    ]
  };
  return config;
});

// bfsp-wrapper:D:\Users\Desktop\abc-w\packages\mod\#bfsp.ts
var newDefault2 = Object.assign(bfsp_default3 ?? {}, { relativePath: "./packages/mod" });
var bfsp_default4 = newDefault2;

// #bfsw.ts
var bfsw_default = defineWorkspace(() => {
  const config = {
    projects: [bfsp_default2, bfsp_default4]
  };
  return config;
});
export {
  bfsw_default as default
};
