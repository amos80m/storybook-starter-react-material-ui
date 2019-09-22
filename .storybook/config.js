import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import {setAddon} from '@storybook/react';
import LiveEdit, {setOptions} from 'storybook-addon-react-live-edit';

setOptions({ theme: 'darcula', presets: ['react'] });

setAddon(LiveEdit);

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