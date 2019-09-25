import React from 'react';
import { storiesOf, addDecorator,setAddon } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { addReadme } from 'storybook-readme';
import { withConsole } from '@storybook/addon-console';
import Button from '.';
import IntelligenceReportsReadme from './README.md';
import JSXAddon from 'storybook-addon-jsx';
setAddon(JSXAddon);
addDecorator(addReadme);

storiesOf('Widgits', module)
storiesOf('Widgits.MapPlayground', module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .addParameters({
    readme: {
      sidebar: IntelligenceReportsReadme,
      highlightSidebar: true,
    },
  })
  .addWithJSX('with data', () => <Button />)
  .addWithJSX('loading', () => <Button />)
  .addWithJSX('no data', () => <Button />);