module.exports = {
  require: [
    './src/_settings/base.css',
  ],
  sections: [
    {
      name: 'Atoms',
      components: () => [
        './src/components/atoms/button/index.js',
        './src/components/atoms/title/index.js',
      ],
      sections: [
        {
          name: 'Forms',
          components: () => [
            './src/components/atoms/forms/input/index.js',
            './src/components/atoms/forms/select/index.js',
            './src/components/atoms/forms/textarea/index.js',
          ],
        },
      ],
    },
    {
      name: 'Molecules',
      components: () => [
        './src/components/molecules/Blockquote/index.js',
        './src/components/molecules/CTA/index.js',
        './src/components/molecules/Hero/index.js',
        './src/components/molecules/Introduction/index.js',
        './src/components/molecules/MediaBlock/index.js',
        './src/components/molecules/ProductIntro/index.js',
      ],
    },
    {
      name: 'Organisms',
      components: () => [
        './src/components/organisms/Accordion/index.js',
        './src/components/organisms/MediaList/index.js',
        './src/components/organisms/Video/index.js',
      ],
    },
  ],
  assetsDir: './src/',
  // styleguideDir: './static/',
};
