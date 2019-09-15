import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

const req = require.context('../src/', true, /stories\.js$/)
function loadStories() {
  req.keys().forEach(req)
}


// addParameters({
//   options: {
//     theme: themes.dark,
//   },
// });

configure(loadStories, module);