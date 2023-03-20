import { storiesOf } from '@storybook/react';
import { Field } from '../components';

const stories = storiesOf('Shitify.js', module);

stories.add('Field', () => {
  return (<Field/>);
});
