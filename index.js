const fs=require('fs');
// using sync

// const text=fs.readFileSync('./read.txt','utf-8');
// console.log(text);

// const output=`this is all about me : ${text}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./output.txt',output);
// console.log('file written');

// async

// const text=fs.readFile('./read.txt',"utf-8",(err,data)=>{
//     if(err) console.log(err)
//     else console.log(data)
// })
// console.log('this is first')

// callback 
const text=fs.readFile('./readFile.txt','utf-8',(err,data)=>{
    fs.readFile(`./${data}.txt`,'utf-8',(err,data1)=>{
      
      fs.readFile(`./append.txt`,'utf-8',(err,data2)=>{
        

        fs.writeFile('./myWriteFile.txt',`${data1}\n ${data2}`,'utf-8',err=>{
            if(err) console.log(err)
            else console.log('your file has been written')
        })

      })
    })

})

