const path = require('path')

console.log('Nazvaniya file:', path.basename(__filename));

console.log('imya Derektoriya:', path.dirname(__dirname));

console.log("Razshirreniya file:", path.extname(__filename));

console.log("parse:", path.parse(__filename).base);

console.log(path.join(__dirname, 'server', 'index.jsx'));