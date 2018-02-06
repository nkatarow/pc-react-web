import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line

import Video from './';
import videoPoster from '../../templates/Homepage/_img/video-poster.jpg';

import Title from '../../atoms/title/';

storiesOf('Video', module)
  .add('Default Vimeo', () => (
    <Video
      isMobile={false}
      url="https://vimeo.com/253985701"
      poster={videoPoster}
    />
  ))
  .add('Vimeo with Content', () => (
    <Video
      isMobile={false}
      url="https://vimeo.com/253985701"
      poster={videoPoster}
    >
      <div>
        <Title tag="h3" theme="context-head" color="scorpion">Headline</Title>
        <Title tag="h2" theme="section-title">Link Text</Title>
        <p>Lorem ipsum dolor sit amet consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
      </div>
    </Video>
  ))
  .add('YouTube with Content', () => (
    <Video
      isMobile={false}
      url="https://www.youtube.com/watch?v=wbSwFU6tY1c"
      poster={videoPoster}
    >
      <div>
        <Title tag="h3" theme="context-head" color="scorpion">Headline</Title>
        <Title tag="h2" theme="section-title">Link Text</Title>
        <p>Lorem ipsum dolor sit amet consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
      </div>
    </Video>
  ));
