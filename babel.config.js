module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            api: './src/api',
            navigation: './src/navigation',
            screens: './src/screens',
            interfaces: './src/interfaces',
          },
        },
      ],
    ],
  };
};
