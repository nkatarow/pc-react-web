<h3>Default settings</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
<MediaBlock
  image='../../../pages/Codestat/_img/25-percent-compressions.svg'
>
  <p>Place whatever content you'd like here, and display using either default HTML elements like this, or other components.</p>
</MediaBlock>
</Wrapper>
```

<h3>Large Size</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
<MediaBlock
  size="large"
  image='../../../pages/Codestat/_img/25-percent-compressions.svg'
>
  <p>Place whatever content you'd like here, and display using either default HTML elements like this, or other components.</p>
</MediaBlock>
</Wrapper>
```

<h3>Large Size w/ Image Theme (bgMoble & bgDesktop added)</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
<MediaBlock
  size="large"
  theme="image"
  bgMobile="../../../pages/Codestat/_img/bg-compression-mobile.jpg"
  bgDesktop="../../../pages/Codestat/_img/bg-compression-desktop.jpg"
  image='../../../pages/Codestat/_img/25-percent-compressions.svg'
>
  <p>Place whatever content you'd like here, and display using either default HTML elements like this, or other components.</p>
</MediaBlock>
</Wrapper>
```
