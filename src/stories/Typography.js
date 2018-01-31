import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '../components/Atoms/Typography/Header';

import * as globals from '../_ui/js/global-variables';

storiesOf('Headers', module)
  .add('H1 Style', () => <Header tag="h1" appearance="h1">H1 Header Style</Header>)
  .add('H2 Style', () => <Header tag="h2" appearance="h2" color={globals.GRAY_3}>H2 Header Style</Header>)
  .add('H3 Style', () => <Header tag="h3" appearance="h3" color={globals.BLUE}>H3 Header Style</Header>)
  .add('H4 Style', () => <Header tag="h4" appearance="h4" color={globals.GREEN}>H4 Header Style</Header>)
  .add('H5 Style', () => <Header tag="h5" appearance="h5" color={globals.BURNT}>H5 Header Style</Header>)
  .add('H6 Style', () => <Header tag="h6" appearance="h6" color={globals.YELLOW}>H6 Header Style</Header>);

storiesOf('Body Copy', module)
  .add('Standard Paragraph', () => <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet tortor egestas porta tempus. Integer molestie faucibus mi, vitae ultrices libero pellentesque a. Nam quis massa ut nibh sollicitudin tincidunt nec eget nulla. Aenean at tortor a nisl gravida ullamcorper et in metus.</p>)
  .add('Medium Paragraph', () => <p className="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet tortor egestas porta tempus. Integer molestie faucibus mi, vitae ultrices libero pellentesque a. Nam quis massa ut nibh sollicitudin tincidunt nec eget nulla. Aenean at tortor a nisl gravida ullamcorper et in metus.</p>)
  .add('Large Paragraph', () => <p className="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet tortor egestas porta tempus. Integer molestie faucibus mi, vitae ultrices libero pellentesque a. Nam quis massa ut nibh sollicitudin tincidunt nec eget nulla. Aenean at tortor a nisl gravida ullamcorper et in metus.</p>);
