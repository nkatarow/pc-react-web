import { configure } from '@storybook/react';
import '../src/_ui/css/base.css'

function loadStories() {
  require('../src/stories/');
  require('../src/stories/Button');
  require('../src/stories/Typography');
}

configure(loadStories, module);
