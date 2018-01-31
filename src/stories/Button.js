import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Atoms/Button/Button';

storiesOf('Button', module)
  .add('Default', () => <Button type="" action="clicked">Default</Button>)
  .add('Outlined', () => <Button type="outlined" action="clicked">Outlined</Button>)
  .add('Text Button', () => <Button type="text" action="clicked">Text Button</Button>);
