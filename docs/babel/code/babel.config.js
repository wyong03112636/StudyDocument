module.exports = function (api) {
  api.cache(true);
  const presets = [
    [
      '@babel/env',
      {
        targets: {
          edge: '7',
          firefox: '60',
          chrome: '67',
          safari: '11.1',
          ie: '6',
        },
        useBuiltIns: 'usage',
      },
    ],
  ];
  const plugins = [
    '@babel/plugin-transform-member-expression-literals',
    '@babel/plugin-transform-property-literals',
    '@babel/plugin-transform-property-mutators',
    '@babel/plugin-transform-reserved-words',
  ];
  return {
    presets,
    plugins,
  };
};
