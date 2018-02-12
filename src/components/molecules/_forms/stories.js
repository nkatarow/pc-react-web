import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line
import { action } from '@storybook/addon-actions'; //eslint-disable-line

import { Input } from './';

storiesOf('Input', module)
  .add('Default', () => <Input type="text" label="Text Input" fieldName="text_input" />);
