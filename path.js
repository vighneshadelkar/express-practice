const path=require('path')

console.log('basename: ',path.basename(__filename))

console.log('dirname: ',path.dirname(__dirname))

console.log('extname: ',path.extname(__filename))

console.log('parse: ',path.parse(__filename))