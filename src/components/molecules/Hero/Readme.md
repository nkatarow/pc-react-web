<h3>Default settings</h3>

```js
const { Provider } = require('react-redux');
const store = require('../../../store/').default;
<Provider store={store}>
  <Hero
    screenWidth={store}
    mobileHero="../../../pages/Codestat/_img/codestat-hero-mobile.jpg"
    desktopHero="../../../pages/Codestat/_img/codestat-hero-desktop.jpg"
  />
</Provider>
```

<h3>Alternate Headline Color</h3>

```js
const { Provider } = require('react-redux');
const store = require('../../../store/').default;
<Provider store={store}>
  <Hero
    screenWidth={store}
    headlineColor="selective-yellow"
    mobileHero="../../../pages/Codestat/_img/codestat-hero-mobile.jpg"
    desktopHero="../../../pages/Codestat/_img/codestat-hero-desktop.jpg"
  />
</Provider>
```

<h3>Additional Copy</h3>

```js
const { Provider } = require('react-redux');
const store = require('../../../store/').default;
<Provider store={store}>
  <Hero
    screenWidth={store}
    mobileHero="../../../pages/Codestat/_img/codestat-hero-mobile.jpg"
    desktopHero="../../../pages/Codestat/_img/codestat-hero-desktop.jpg"
    copy="I've got a little something extra to mention in relation to that headline."
  />
</Provider>
```
