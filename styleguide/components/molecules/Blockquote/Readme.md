<h3>Default settings</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
  <Blockquote
    isMobile={this.props}
    mobileBackground={'../../../pages/HealthEMS/_img/quote-bg-mobile.jpg'}
    desktopBackground={'../../../pages/HealthEMS/_img/quote-bg-desktop.jpg'}
    quote="Here's an example of some quote text"
  />
</Wrapper>
```

<h3>With One Cite Line</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
  <Blockquote
    isMobile={this.props}
    mobileBackground={'../../../pages/HealthEMS/_img/quote-bg-mobile.jpg'}
    desktopBackground={'../../../pages/HealthEMS/_img/quote-bg-desktop.jpg'}
    quote="Here's an example of some quote text"
    citeFirstLine="Quotee's Name"
  />
</Wrapper>
```

<h3>With Two Cite Lines</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
  <Blockquote
    isMobile={this.props}
    mobileBackground={'../../../pages/HealthEMS/_img/quote-bg-mobile.jpg'}
    desktopBackground={'../../../pages/HealthEMS/_img/quote-bg-desktop.jpg'}
    quote="Here's an example of some quote text"
    citeFirstLine="Quotee's Name"
    citeSecondLine="Quotee's Occuplation"
  />
</Wrapper>
```

<h3>With Three Cite Lines</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
  <Blockquote
    isMobile={this.props}
    mobileBackground={'../../../pages/HealthEMS/_img/quote-bg-mobile.jpg'}
    desktopBackground={'../../../pages/HealthEMS/_img/quote-bg-desktop.jpg'}
    quote="Here's an example of some quote text"
    citeFirstLine="Quotee's Name"
    citeSecondLine="Quotee's Occuplation"
    citeThirdLine="Quotee's Employer"
  />
</Wrapper>
```
