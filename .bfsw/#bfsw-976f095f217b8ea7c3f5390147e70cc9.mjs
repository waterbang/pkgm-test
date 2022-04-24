// C:/Users/BFChainer/AppData/Roaming/npm/node_modules/@bfchain/pkgm/node_modules/@bfchain/pkgm-bfsw/dist/main/src/index.mjs
var defineWorkspace = (cb) => {
  return cb();
};

// C:/Users/BFChainer/AppData/Roaming/npm/node_modules/@bfchain/pkgm/node_modules/@bfchain/pkgm-bfsp/dist/main/src/index.mjs
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
    name: "@abc-w/mod",
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
