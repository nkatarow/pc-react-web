import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button, { ButtonTheme } from './';

storiesOf('Button', module)
  .add('Default', () => <Button onClick={action('clicked')}>Learn more</Button>)
  .add('Default Disabled', () => (
    <Button onClick={action('clicked')} disabled>
      Learn more
    </Button>
  ))
  .add('Outlined', () => (
    <Button theme={ButtonTheme.OUTLINED} onClick={action('clicked')}>
      Learn more
    </Button>
  ))
  .add('Outlined Disabled', () => (
    <Button theme={ButtonTheme.OUTLINED} onClick={action('clicked')} disabled >
      Learn more
    </Button>
  ));
