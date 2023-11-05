module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      'expo-router/babel',
      [
        'module-resolver',
        {
          alias: {
            app: './app',
            components: './components',
            hooks: './hooks',
          },
        },
      ],
    ],
  }
}
