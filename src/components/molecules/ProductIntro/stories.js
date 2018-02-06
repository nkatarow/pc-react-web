import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line

import ProductIntro from './';

storiesOf('Product Intro', module)
  .add('Default', () => (
    <ProductIntro
      contextHead="Context Head"
      headline="Headline Goes Here"
    />
  ))
  .add('Colored Context', () => (
    <ProductIntro
      contextHead="Context Head"
      contextColor="affair"
      headline="Headline Goes Here"
    />
  ))
  .add('With Paragraph', () => (
    <ProductIntro
      contextHead="Context Head"
      headline="Headline Goes Here"
      copy="Capture the rich flow of data that starts with a patient event to empower better decisions, faster team mobilization, and improved outcomes. A continuum of data solutions makes it faster and easier to provide better, safer, and more efficient care."
    />
  ))
  .add('With Gray Theme', () => (
    <ProductIntro
      theme="gray"
      contextHead="Context Head"
      headline="Headline Goes Here"
      copy="Capture the rich flow of data that starts with a patient event to empower better decisions, faster team mobilization, and improved outcomes. A continuum of data solutions makes it faster and easier to provide better, safer, and more efficient care."
    />
  ));
