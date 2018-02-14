module.exports = {
  require: [
    './src/_settings/base.css',
  ],
  ignore: [
    '**/atoms/hamburger/*.js',
    '**/atoms/picture/*.js',
    '**/molecules/_layouts/HalfHalf/*.js',
    '**/molecules/PrimaryNav/*.js',
    '**/molecules/UtilityNav/*.js',
    '**/organisms/Accordion/**/*.js',
    '**/organisms/Header/*.js',
    '**/organisms/Footer/*.js',
  ],
  components: './src/components/**/**/*.js',
};
