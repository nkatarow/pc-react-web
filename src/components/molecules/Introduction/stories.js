import React from 'react';
import { storiesOf } from '@storybook/react';

import Introduction from './';
import introMobileImage from '../../templates/Homepage/_img/hp-intro-bg-mobile.png';
import introDesktopImage from '../../templates/Homepage/_img/hp-intro-bg-desktop.png';

storiesOf('Introduction', module)
  .add('Default', () => (
    <Introduction />
  ))
  .add('Custom Copy', () => (
    <Introduction
      headline="Integrated data solutions so you can deliver better care"
      copy="An unmatched set of data tools connects and accelerates caregiving teams to improve patient outcomes and operational efficiency. Choose the solution that meets your clinical and operational needs, then deploy quickly with support from a true partner — and the leader in emergency medicine and resuscitation."
    />
  ))
  .add('Additional Small Copy', () => (
    <Introduction
      smallCopy="Make operations and documentation easier and more efficient with this patient-based, protocol-driven ePCR that helps you easily receive, share, and find actionable data. This flexible solution can be customized to match your needs, from smooth CAD integration to accurate billing and reporting."
    />
  ))
  .add('With Image', () => (
    <Introduction
      mobileImage={introMobileImage}
      desktopImage={introDesktopImage}
    />
  ));
