const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const { addIndexWithExports } = require('./addIndexWithExport');
const { DEFAULT_STORY_FILE_CONTENT, DEFAULT_COMPONENT_FILE_CONTENT } = require('./mocks');

const component = process.env.npm_config_component;

const srcPath = path.join(process.cwd(), 'src');
const componentsPath = path.join(srcPath, 'components');

const componentName = _.capitalize(component);
const componentPath = path.join(componentsPath, componentName);
const componentFileName = `${componentName}.tsx`;
const componentFilePath = path.join(componentPath, componentFileName);

fs.mkdirSync(componentPath);
fs.openSync(componentFilePath, 'w');
fs.appendFileSync(componentFilePath, DEFAULT_COMPONENT_FILE_CONTENT(componentName));

const defaultFiles = ['styled.ts', 'types.ts'];

defaultFiles.forEach((fileName) => {
  const filePath = path.join(componentPath, fileName);
  fs.openSync(filePath, 'w');
});

addIndexWithExports(componentPath);

const componentsIndexFile = path.join(componentsPath, 'index.ts');
const componentExportExpression = `\nexport * from './${componentName}';`;
fs.appendFileSync(componentsIndexFile, componentExportExpression);

const storiesPath = path.join(srcPath, 'stories');
const componentStoryFileName = `${componentName}.stories.tsx`;
const componentStoryFilePath = path.join(storiesPath, componentStoryFileName);
fs.openSync(componentStoryFilePath, 'w');
fs.appendFileSync(componentStoryFilePath, DEFAULT_STORY_FILE_CONTENT(componentName));
