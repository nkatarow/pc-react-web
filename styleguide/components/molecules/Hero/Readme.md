<h3>Default settings</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
  <Hero
    screenWidth={this.props}
    mobileHero="../../../pages/Codestat/_img/codestat-hero-mobile.jpg"
    desktopHero="../../../pages/Codestat/_img/codestat-hero-desktop.jpg"
  />
</Wrapper>
```
<h3>Alternate Headline Color</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
  <Hero
    screenWidth={this.props}
    headlineColor="selective-yellow"
    mobileHero="../../../pages/Codestat/_img/codestat-hero-mobile.jpg"
    desktopHero="../../../pages/Codestat/_img/codestat-hero-desktop.jpg"
  />
</Wrapper>
```

<h3>Additional Copy</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
  <Hero
    screenWidth={this.props}
    mobileHero="../../../pages/Codestat/_img/codestat-hero-mobile.jpg"
    desktopHero="../../../pages/Codestat/_img/codestat-hero-desktop.jpg"
    copy="I've got a little something extra to mention in relation to that headline."
  />
</Wrapper>
```
