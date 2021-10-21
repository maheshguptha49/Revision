const express=require('express')
const  connect  = require('./config/db')
const cors=require("cors")
const app = express()
app.use(cors())
app.use(express.json())


app.use("/comments",require("./controllers/comment.controller"))

function start(){
    app.listen(8000,async ()=>{
        await connect()
        console.log("listening actively on port 8000")
    })
}
module.exports =start;