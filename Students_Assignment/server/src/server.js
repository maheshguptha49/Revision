const express=require("express")
const app = express()
app.use(express.json())
const connect=require("./config/db")
const studentController=require("./controllers/student.controller")
const cors=require("cors")
app.use(cors())
app.use("/students",studentController)

app.post("/login",async (req,res)=>{
    res.status(201).json({token:"succesful fellow"})
})
app.listen(8000,async ()=>{
    await connect()
    console.log("listening on port 8000 students assignment")
})

