import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line

// Atoms
import Title from '../../atoms/title/';

// Molecules
import HalfHalf from '../../molecules/_layouts/HalfHalf';

// Organisms
import Accordion from './';
import AccordionItem from './AccordionItem';
import AccordionItemTitle from './AccordionItemTitle';
import AccordionItemBody from './AccordionItemBody';

storiesOf('Accordion', module)
  .add('Default', () => (
    <Accordion>

      <AccordionItem>
        <AccordionItemTitle>
          <Title tag="p" theme="subhead">Title 1</Title>
        </AccordionItemTitle>
        <AccordionItemBody>
          <HalfHalf>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales vehicula lectus, id pellentesque tellus vestibulum at. Praesent consequat ligula vitae dolor ultricies, id pulvinar velit tempus. Etiam nec suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tempor consectetur malesuada. Donec tincidunt imperdiet velit sed ullamcorper. Sed non fermentum nibh.</p>
            </div>
            <div>
              <p>Aliquam vitae nisl nulla. Phasellus ut blandit tellus. Cras eu bibendum mi, at venenatis nisl. Aenean sit amet viverra risus, ac egestas tortor. Ut ullamcorper posuere ex, ac suscipit lorem. Curabitur rutrum condimentum dapibus. Praesent quis neque ut justo porttitor fermentum. Fusce elit metus, semper et elementum sit amet, feugiat porttitor est. Cras ultricies nulla at neque luctus, nec eleifend ex tristique. Integer id metus sed augue rhoncus vulputate vitae vulputate ex. Donec auctor dapibus velit, ut fermentum magna venenatis pulvinar. Proin dignissim tortor diam, et pretium risus dictum a. Donec iaculis velit et laoreet tincidunt.</p>
            </div>
          </HalfHalf>

        </AccordionItemBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemTitle>
          <Title tag="p" theme="subhead">Title 2</Title>
        </AccordionItemTitle>
        <AccordionItemBody>
          <HalfHalf>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales vehicula lectus, id pellentesque tellus vestibulum at. Praesent consequat ligula vitae dolor ultricies, id pulvinar velit tempus. Etiam nec suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tempor consectetur malesuada. Donec tincidunt imperdiet velit sed ullamcorper. Sed non fermentum nibh.</p>
            </div>
            <div>
              <p>Aliquam vitae nisl nulla. Phasellus ut blandit tellus. Cras eu bibendum mi, at venenatis nisl. Aenean sit amet viverra risus, ac egestas tortor. Ut ullamcorper posuere ex, ac suscipit lorem. Curabitur rutrum condimentum dapibus. Praesent quis neque ut justo porttitor fermentum. Fusce elit metus, semper et elementum sit amet, feugiat porttitor est. Cras ultricies nulla at neque luctus, nec eleifend ex tristique. Integer id metus sed augue rhoncus vulputate vitae vulputate ex. Donec auctor dapibus velit, ut fermentum magna venenatis pulvinar. Proin dignissim tortor diam, et pretium risus dictum a. Donec iaculis velit et laoreet tincidunt.</p>
            </div>
          </HalfHalf>
        </AccordionItemBody>
      </AccordionItem>

    </Accordion>
  ))
  .add('First Fold Pre-Expanded', () => (
    <Accordion>

      <AccordionItem expanded>
        <AccordionItemTitle>
          <Title tag="p" theme="subhead">Title 1</Title>
        </AccordionItemTitle>
        <AccordionItemBody>
          <HalfHalf>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales vehicula lectus, id pellentesque tellus vestibulum at. Praesent consequat ligula vitae dolor ultricies, id pulvinar velit tempus. Etiam nec suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tempor consectetur malesuada. Donec tincidunt imperdiet velit sed ullamcorper. Sed non fermentum nibh.</p>
            </div>
            <div>
              <p>Aliquam vitae nisl nulla. Phasellus ut blandit tellus. Cras eu bibendum mi, at venenatis nisl. Aenean sit amet viverra risus, ac egestas tortor. Ut ullamcorper posuere ex, ac suscipit lorem. Curabitur rutrum condimentum dapibus. Praesent quis neque ut justo porttitor fermentum. Fusce elit metus, semper et elementum sit amet, feugiat porttitor est. Cras ultricies nulla at neque luctus, nec eleifend ex tristique. Integer id metus sed augue rhoncus vulputate vitae vulputate ex. Donec auctor dapibus velit, ut fermentum magna venenatis pulvinar. Proin dignissim tortor diam, et pretium risus dictum a. Donec iaculis velit et laoreet tincidunt.</p>
            </div>
          </HalfHalf>

        </AccordionItemBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemTitle>
          <Title tag="p" theme="subhead">Title 2</Title>
        </AccordionItemTitle>
        <AccordionItemBody>
          <HalfHalf>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales vehicula lectus, id pellentesque tellus vestibulum at. Praesent consequat ligula vitae dolor ultricies, id pulvinar velit tempus. Etiam nec suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tempor consectetur malesuada. Donec tincidunt imperdiet velit sed ullamcorper. Sed non fermentum nibh.</p>
            </div>
            <div>
              <p>Aliquam vitae nisl nulla. Phasellus ut blandit tellus. Cras eu bibendum mi, at venenatis nisl. Aenean sit amet viverra risus, ac egestas tortor. Ut ullamcorper posuere ex, ac suscipit lorem. Curabitur rutrum condimentum dapibus. Praesent quis neque ut justo porttitor fermentum. Fusce elit metus, semper et elementum sit amet, feugiat porttitor est. Cras ultricies nulla at neque luctus, nec eleifend ex tristique. Integer id metus sed augue rhoncus vulputate vitae vulputate ex. Donec auctor dapibus velit, ut fermentum magna venenatis pulvinar. Proin dignissim tortor diam, et pretium risus dictum a. Donec iaculis velit et laoreet tincidunt.</p>
            </div>
          </HalfHalf>
        </AccordionItemBody>
      </AccordionItem>

    </Accordion>
  ))
  .add('Accordion set to false', () => (
    <Accordion accordion={false}>

      <AccordionItem>
        <AccordionItemTitle>
          <Title tag="p" theme="subhead">Title 1</Title>
        </AccordionItemTitle>
        <AccordionItemBody>
          <HalfHalf>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales vehicula lectus, id pellentesque tellus vestibulum at. Praesent consequat ligula vitae dolor ultricies, id pulvinar velit tempus. Etiam nec suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tempor consectetur malesuada. Donec tincidunt imperdiet velit sed ullamcorper. Sed non fermentum nibh.</p>
            </div>
            <div>
              <p>Aliquam vitae nisl nulla. Phasellus ut blandit tellus. Cras eu bibendum mi, at venenatis nisl. Aenean sit amet viverra risus, ac egestas tortor. Ut ullamcorper posuere ex, ac suscipit lorem. Curabitur rutrum condimentum dapibus. Praesent quis neque ut justo porttitor fermentum. Fusce elit metus, semper et elementum sit amet, feugiat porttitor est. Cras ultricies nulla at neque luctus, nec eleifend ex tristique. Integer id metus sed augue rhoncus vulputate vitae vulputate ex. Donec auctor dapibus velit, ut fermentum magna venenatis pulvinar. Proin dignissim tortor diam, et pretium risus dictum a. Donec iaculis velit et laoreet tincidunt.</p>
            </div>
          </HalfHalf>

        </AccordionItemBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemTitle>
          <Title tag="p" theme="subhead">Title 2</Title>
        </AccordionItemTitle>
        <AccordionItemBody>
          <HalfHalf>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales vehicula lectus, id pellentesque tellus vestibulum at. Praesent consequat ligula vitae dolor ultricies, id pulvinar velit tempus. Etiam nec suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tempor consectetur malesuada. Donec tincidunt imperdiet velit sed ullamcorper. Sed non fermentum nibh.</p>
            </div>
            <div>
              <p>Aliquam vitae nisl nulla. Phasellus ut blandit tellus. Cras eu bibendum mi, at venenatis nisl. Aenean sit amet viverra risus, ac egestas tortor. Ut ullamcorper posuere ex, ac suscipit lorem. Curabitur rutrum condimentum dapibus. Praesent quis neque ut justo porttitor fermentum. Fusce elit metus, semper et elementum sit amet, feugiat porttitor est. Cras ultricies nulla at neque luctus, nec eleifend ex tristique. Integer id metus sed augue rhoncus vulputate vitae vulputate ex. Donec auctor dapibus velit, ut fermentum magna venenatis pulvinar. Proin dignissim tortor diam, et pretium risus dictum a. Donec iaculis velit et laoreet tincidunt.</p>
            </div>
          </HalfHalf>
        </AccordionItemBody>
      </AccordionItem>

    </Accordion>
  ));
