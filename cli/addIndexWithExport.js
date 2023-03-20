const fs = require('fs');
const path = require('path')

const addIndexWithExports = (directory) => {
  const indexFilePath = path.join(directory, 'index.ts');

  fs.openSync(indexFilePath, 'w');

  const directoryContents = fs.readdirSync(directory);
  directoryContents.forEach((contentName, index) => {
    const contentPath = path.join(directory, contentName);
    const contentStat = fs.statSync(contentPath);
    let exportExpression = 'export * from ';
    if (contentStat.isDirectory()) {
      addIndexWithExports(path.join(directory, contentName));
      exportExpression += `'./${contentName}';`;
    }
    if (contentStat.isFile()) {
      const fileParsedPath = path.parse(contentPath);
      const fileName = fileParsedPath.name;
      if (fileName === 'index') return;
      exportExpression += `'./${fileName}';`;
    }
    if (index < directoryContents.length - 1) {
      exportExpression += '\n';
    }
    fs.appendFileSync(indexFilePath, exportExpression);
  });
};

module.exports = { addIndexWithExports };