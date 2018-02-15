<h3>Default settings</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
  <Introduction
    isMobile={this.props}
  />
</Wrapper>
```

<h3>With Image (Mobile & Desktop)</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
  <Introduction
    isMobile={this.props}
    introMobileImage="../../../pages/Homepage/_img/hp-intro-bg-mobile.png"
    introDesktopImage="../../../pages/Homepage/_img/hp-intro-bg-desktop.png"
  />
</Wrapper>
```

<h3>With Extra Small Copy</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
  <Introduction
    isMobile={this.props}
    smallCopy="There's something else I'd like to tell you, but I don't want it to be so large."
  />
</Wrapper>
```
