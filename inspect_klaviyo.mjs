import fs from 'fs';

const svg = fs.readFileSync('src/assets/logos/klaviyo_logo.svg', 'utf8');
console.log(svg);
