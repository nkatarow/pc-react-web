<h3>Default settings</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
  <Video
    url="https://vimeo.com/253985701"
    poster="../../../pages/Homepage/_img/video-poster.jpg"
    isMobile={this.props}
  />
</Wrapper>
```

<h3>With Children</h3>

```js
const Wrapper = require('../../../_utility/Wrapper').default;
<Wrapper>
  <Video
    url="https://vimeo.com/253985701"
    poster="../../../pages/Homepage/_img/video-poster.jpg"
    isMobile={this.props}
  >
    <div>
      <Title tag="h3" theme="context-head" color="scorpion">Video</Title>
      <Title tag="h2" theme="section-title">Data Solutions</Title>
      <p>Lorem ipsum dolor sit amet consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    </div>
  </Video>
</Wrapper>
```
