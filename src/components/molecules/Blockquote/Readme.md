<h3>Default settings</h3>

```js
const { Provider } = require('react-redux');
const storeConfig = require('../../../store/').default;
const store = storeConfig.getState();
<Provider store={storeConfig}>
  <Blockquote
    isMobile={store.mobilestate.isMobile}
    mobileBackground={'../../../pages/HealthEMS/_img/quote-bg-mobile.jpg'}
    desktopBackground={'../../../pages/HealthEMS/_img/quote-bg-desktop.jpg'}
    quote="Here's an example of some quote text"
  />
</Provider>
```

<h3>With One Cite Line</h3>

```js
const { Provider } = require('react-redux');
const storeConfig = require('../../../store/').default;
const store = storeConfig.getState();
<Provider store={storeConfig}>
  <Blockquote
    isMobile={store.mobilestate.isMobile}
    mobileBackground={'../../../pages/HealthEMS/_img/quote-bg-mobile.jpg'}
    desktopBackground={'../../../pages/HealthEMS/_img/quote-bg-desktop.jpg'}
    quote="Here's an example of some quote text"
    citeFirstLine="Quotee's Name"
  />
</Provider>
```

<h3>With Two Cite Lines</h3>

```js
const { Provider } = require('react-redux');
const storeConfig = require('../../../store/').default;
const store = storeConfig.getState();
<Provider store={storeConfig}>
  <Blockquote
    isMobile={store.mobilestate.isMobile}
    mobileBackground={'../../../pages/HealthEMS/_img/quote-bg-mobile.jpg'}
    desktopBackground={'../../../pages/HealthEMS/_img/quote-bg-desktop.jpg'}
    quote="Here's an example of some quote text"
    citeFirstLine="Quotee's Name"
    citeSecondLine="Quotee's Occuplation"
  />
</Provider>
```

<h3>With Three Cite Lines</h3>

```js
const { Provider } = require('react-redux');
const storeConfig = require('../../../store/').default;
const store = storeConfig.getState();
<Provider store={storeConfig}>
  <Blockquote
    isMobile={store.mobilestate.isMobile}
    mobileBackground={'../../../pages/HealthEMS/_img/quote-bg-mobile.jpg'}
    desktopBackground={'../../../pages/HealthEMS/_img/quote-bg-desktop.jpg'}
    quote="Here's an example of some quote text"
    citeFirstLine="Quotee's Name"
    citeSecondLine="Quotee's Occuplation"
    citeThirdLine="Quotee's Employer"
  />
</Provider>
```
