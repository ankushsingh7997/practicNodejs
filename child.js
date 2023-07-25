console.log('child process started')

process.on("message",(message)=>{
    console.log('hii i am '+message)
    process.send(`Hello, ${message}! I am the child process.`);
})
