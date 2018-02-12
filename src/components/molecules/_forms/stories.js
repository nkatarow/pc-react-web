import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line
import { action } from '@storybook/addon-actions'; //eslint-disable-line

import { Input, Textarea, Select } from './';

storiesOf('Input', module)
  .add('Text Input', () => <Input type="text" label="Text Input" fieldName="text_input" />)
  .add('Text Input Required', () => <Input type="text" label="Text Input" fieldName="text_input" required />)
  .add('Text Area Required', () => <Textarea label="Text Area" fieldName="text_input" required />)
  .add('Text Area 10 Rows', () => <Textarea label="Text Area" fieldName="text_input" rows={10} />)
  .add('Select Field', () => (
    <Select fieldName="select" label="Select Field">
      <option value="">Option One</option>
      <option value="">Option Two</option>
      <option value="">Option Three</option>
      <option value="">Option Four</option>
    </Select>
  ));
