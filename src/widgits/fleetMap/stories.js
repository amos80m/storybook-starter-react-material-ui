import React from 'react';
import { storiesOf, addDecorator,setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { addReadme } from 'storybook-readme';
import { withConsole } from '@storybook/addon-console';
import Button from '.';
import IntelligenceReportsReadme from './README.md';
import { jsxDecorator } from 'storybook-addon-jsx';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

addDecorator(addReadme);


storiesOf('Widgits', module)
storiesOf('Widgits.Map', module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .addParameters({
    readme: {
      sidebar: IntelligenceReportsReadme,
      highlightSidebar: true,
    },
  })
  .addWithJSX('with data', () => <Button />)