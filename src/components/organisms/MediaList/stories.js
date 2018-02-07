import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line

// Atoms
import Title from '../../atoms/title/';
import Picture from '../../atoms/picture/';

import MediaList, { MediaListTheme } from './';
import MediaListIcon from '../../templates/HealthEMS/_img/docs-icon.svg';

storiesOf('MediaList', module)
  .add('Default w/ 1 Child', () => (
    <MediaList isMobile={false}>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
    </MediaList>
  ))
  .add('Default w/ 2 Children', () => (
    <MediaList isMobile={false}>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
    </MediaList>
  ))
  .add('Default w/ 3 Children', () => (
    <MediaList isMobile={false}>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
    </MediaList>
  ))
  .add('Gray Theme w/ 4 Children', () => (
    <MediaList isMobile={false} theme={MediaListTheme.GRAY}>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
    </MediaList>
  ))
  .add('Gray Theme w/ 7 Children', () => (
    <MediaList isMobile={false} theme={MediaListTheme.GRAY}>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
      <div>
        <Picture src={MediaListIcon} alt="" />
        <Title tag="h3" theme="subhead">
          Quality documentation according to how you work
        </Title>
        <p>Capture data from multiple sources to easily document activity at the point of care — based on input from CAD, monitors, and more — all according to your protocols.</p>
      </div>
    </MediaList>
  ));
