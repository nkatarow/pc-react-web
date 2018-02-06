import React from 'react';
import { storiesOf } from '@storybook/react';  //eslint-disable-line

import Title, { TitleThemes } from './';

storiesOf('Title', module)
  .add('Default', () => <Title tag="h1">Default</Title>)
  .add('Page Title', () => <Title tag="h1" theme={TitleThemes.PAGE_TITLE}>Page Title</Title>)
  .add('Hero Title', () => <Title tag="h2" color="gray" theme={TitleThemes.HERO_TITLE}>Hero Title</Title>)
  .add('Section Title', () => <Title tag="h3" color="burnt" theme={TitleThemes.SECTION_TITLE}>Section Title</Title>)
  .add('Headline', () => <Title tag="h4" color="green" theme={TitleThemes.HEADLINE_TITLE}>Headline</Title>)
  .add('Subhead', () => <Title tag="h5" color="blue" theme={TitleThemes.SUBHEAD_TITLE}>Subhead</Title>)
  .add('Context Head', () => <Title tag="h6" color="yellow" theme={TitleThemes.CONTEXT_TITLE}>Context Head</Title>);
