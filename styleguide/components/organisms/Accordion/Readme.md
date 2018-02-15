<h3>Default settings</h3>

```js
const AccordionItem = require('./AccordionItem').default;
const AccordionItemTitle = require('./AccordionItemTitle').default;
const AccordionItemBody = require('./AccordionItemBody').default;
<Accordion>
  <AccordionItem>
    <AccordionItemTitle>
      <p>Accordion Item Title</p>
    </AccordionItemTitle>

    <AccordionItemBody>
      <p>Accordion Item Body</p>
    </AccordionItemBody>
  </AccordionItem>
</Accordion>
```

<h3>Multiple Items and Use of other Components</h3>

```js
const AccordionItem = require('./AccordionItem').default;
const AccordionItemTitle = require('./AccordionItemTitle').default;
const AccordionItemBody = require('./AccordionItemBody').default;
<Accordion>
  <AccordionItem>
    <AccordionItemTitle>
      <Title tag="h3" theme="headline">Accordion Item Title 1</Title>
    </AccordionItemTitle>

    <AccordionItemBody>
      <Title tag="p" theme="subhead">Subhead styled paragraph</Title>
      <p>Perhaps a paragraph should go here with some additional information</p>
      <Button>More about Health EMS</Button>
    </AccordionItemBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionItemTitle>
      <Title tag="h3" theme="headline">Accordion Item Title 2</Title>
    </AccordionItemTitle>

    <AccordionItemBody>
      <Title tag="p" theme="subhead">Subhead styled paragraph</Title>
      <p>Perhaps a paragraph should go here with some additional information</p>
      <Button>More about Health EMS</Button>
    </AccordionItemBody>
  </AccordionItem>
</Accordion>
```

<h3>Multiple Items with First Item opened</h3>

```js
const AccordionItem = require('./AccordionItem').default;
const AccordionItemTitle = require('./AccordionItemTitle').default;
const AccordionItemBody = require('./AccordionItemBody').default;
<Accordion activeItems={[0]}>
  <AccordionItem>
    <AccordionItemTitle>
      <Title tag="h3" theme="headline">Accordion Item Title 1</Title>
    </AccordionItemTitle>

    <AccordionItemBody>
      <Title tag="p" theme="subhead">Subhead styled paragraph</Title>
      <p>Perhaps a paragraph should go here with some additional information</p>
      <Button>More about Health EMS</Button>
    </AccordionItemBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionItemTitle>
      <Title tag="h3" theme="headline">Accordion Item Title 2</Title>
    </AccordionItemTitle>

    <AccordionItemBody>
      <Title tag="p" theme="subhead">Subhead styled paragraph</Title>
      <p>Perhaps a paragraph should go here with some additional information</p>
      <Button>More about Health EMS</Button>
    </AccordionItemBody>
  </AccordionItem>
</Accordion>
```
