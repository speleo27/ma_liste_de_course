module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        root: ["."],
        alias: {
          "@component": "./app/component",
          "@hook": "./app/hook",
          "@navigation": "./app/navigation",
          "@screens": "./app/screens"

        }
      }]
    ]
  };
};
