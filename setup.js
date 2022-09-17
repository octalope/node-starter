import fs from 'fs';

import packageJson from './package.json';

packageJson.name = process.argv[2];
packageJson.version = '1.0.0';
packageJson.description = '';
packageJson.author = '';
packageJson.repository.url = '';

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

const readme = fs.readFileSync('./README.md', 'utf8');
fs.writeFileSync('./README.md', readme.replace('Scratch', `${process.argv[2]}`));
