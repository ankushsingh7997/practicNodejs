const fs=require('fs')
// look for the directory otherwise it will give error
const readStream=fs.createReadStream("C:\\Users\\Ankush\\OneDrive\\Desktop\\New folder (4)\\practice\\input.txt")
readStream.on('data',(chunkdata)=>{
    console.log(chunkdata.toString())
})
readStream.on('end',()=>{
    console.log("done reading")
})