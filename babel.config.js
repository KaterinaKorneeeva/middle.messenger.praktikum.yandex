module.exports = api => {
  api.cache(false);

  const presets = [
      '@babel/preset-typescript',
  ];

  return {presets};

};
