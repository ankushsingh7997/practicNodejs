function fetchdata(callback)
{
    setTimeout(()=>{
        let error=new Error('something is wrong')
        const data="this is your data"

        if(error) callback(error)
        else callback(null,data)
    })

}
fetchdata((error,data)=>{
    error?console.log(error):console.log(data)

})