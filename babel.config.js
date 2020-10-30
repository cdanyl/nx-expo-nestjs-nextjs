module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@fullstack/models": ["./libs/models/src/index.ts"],
          }
        }
      ]
    ]
  };
};
