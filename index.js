const fs=require('fs')

const text=fs.readFileSync('./read.txt','utf-8');
console.log(text)

const output=`this is all about me : ${text}.\nCreated on ${Date.now()}`
fs.writeFileSync('./output.txt',output)
console.log('file written')