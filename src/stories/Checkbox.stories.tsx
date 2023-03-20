import { storiesOf } from '@storybook/react';
import { Checkbox } from '../components';

const stories = storiesOf('Shitify.js', module);

stories.add('Checkbox', () => {
  return (<Checkbox/>);
});