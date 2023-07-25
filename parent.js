const {fork}=require('child_process')
const child=fork('child.js')

child.send('ankush')

child.on('message',(resp)=>console.log('response from child : '+resp))


console.log("parent process is started")