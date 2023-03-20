const DEFAULT_STORY_FILE_CONTENT = (componentName) => (
`import { storiesOf } from '@storybook/react';
import { ${componentName} } from '../components';

const stories = storiesOf('Shitify.js', module);

stories.add('${componentName}', () => {
  return (<${componentName}/>);
});`);

const DEFAULT_COMPONENT_FILE_CONTENT = (componentName) => (
`export const ${componentName} = () => {
  return <div>${componentName}</div>
};`);

module.exports = {
  DEFAULT_STORY_FILE_CONTENT,
  DEFAULT_COMPONENT_FILE_CONTENT,
};