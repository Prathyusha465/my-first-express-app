const express=require("express");
const app=express();

app.use((req,res)=>{
    
    console.log("we got a request");
    res.send("hello,we got your request");
})
app.listen(8080,()=>{
        console.log(`port listening on ${3000}`);
    });
