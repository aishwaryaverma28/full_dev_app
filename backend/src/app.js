const express = require("express");

const app = express();


app.use("/hello",(req, res)=> {
    res.send("hello hi hi");
})
app.use("/test",(req, res)=> {
    res.send("hello from the server");
})
app.use("/",(req, res)=> {
    res.send("hello from the dashboard");
})
app.listen(7777, ()=>{
    console.log("server is running on port 7777");
    
});