const cluster=require('cluster')
const os=require('os')
const express=require('express')
let app=express();


let noOFcups=os.cpus().length;

if(cluster.isMaster)
{
    console.log(`master process started. forking ${noOFcups} workers`)

    for(let i=0;i<noOFcups;i++)
    {
        cluster.fork();
    }
    cluster.on('exit',()=>{
        cluster.fork();
        console.log('new worker started')
    })
}
else{

    app.listen(3000,()=>{
        console.log(`worker process with pid: ${process.pid} listening to  port 3000`)
    })
}


