import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

const rows = [...new Array(4)].map(arr => ({ num:95, title: 'Flixes Test', time: 'Yesterday 13:45:00', src: 'From my head', isClassified: false, status: 'high' }))
rows.push({ num:65, title: 'Flixes Test', time: 'Yesterday 13:45:00', src: 'From my head', isClassified: false, status: 'high' })
storiesOf('Widgits', module)
storiesOf('Widgits.IntelligenceReports', module)
  .add('with data', () => <Button data={{rows,success: true}} />)
  .add('loading', () => <Button data={{ success: true, rows:[] }} />)
  .add('no data', () => <Button data={{ success: false, rows:[]}} />);