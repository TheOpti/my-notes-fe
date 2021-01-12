const path = require('path');

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  webpackFinal: async (config) => {
    // get index of css rule
    const ruleCssIndex = config.module.rules.findIndex(rule => rule.test.toString() === '/\\.css$/');

    // map over the 'use' array of the css rule and set the 'module' option to true
    config.module.rules[ruleCssIndex].use.map(item => {
      if (item.loader && item.loader.includes('/css-loader/')) {
        item.options.modules = {
          mode: 'local',
          localIdentName: '[local]__[hash:base64:4]',
        };
      }

      return item;
    })

    config.resolve = {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        ...config.resolve.alias,
        components: path.resolve(__dirname, '../src/components/'),
        containers: path.resolve(__dirname, '../src/containers/'),
        context: path.resolve(__dirname, '../src/context/'),
        pages: path.resolve(__dirname, '../src/pages/'),
      },
    };

    return config;
  },
}