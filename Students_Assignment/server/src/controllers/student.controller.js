const {Router}=require('express')
const Student = require('../models/Student.model')

const router=Router() 

router.get('',async (req,res)=>{
 try {
    const query = req.query
    let  limit=query.limit ||"10"
    let  pageNumber=query.page||"1"
    limit=Number(limit)
    pageNumber=Number(pageNumber)
    const skip=(pageNumber-1)*limit
    const filters=[]
    for(key in query) {
        if(key ==="limit"||key ==="page"||key==="sort") continue
        filters.push({[key]:query[key]})
    }
    let sort=query.sort
    const sorts={}
    if(sort!==undefined){
        sort=sort.split(",")
        for(let i=0;i<sort.length;i++){
            sort[i]=sort[i].split("")
            let key=sort[i].filter((item)=>item!=="-"&&item!=="1")
            let value=sort[i].filter((item)=>item==="-"||item==="1")
            sorts[key.join("")]=+value.join("")
        }
    }
    console.log(sorts,"sorts")
    // console.log(filters,"filters")
    const students=filters.length>0?await Student.find({$and: filters}).skip(skip).limit(limit).sort(sorts): await Student.find().skip(skip).limit(limit).sort(sorts)
    const studentsCount=filters.length>0?await Student.find({$and: filters}).countDocuments(): await Student.find().countDocuments()
    const totalPages=Math.ceil(studentsCount/limit)
    res.status(200).json({totalPages,students})
 } catch (error) {
    res.status(500).json({message:"something went wrong",error:error.message})
    console.log(error.message);     
 }
})

router.post("",async (req,res)=>{
try {
    const student=await Student.create(req.body)
    res.status(201).json(student)
} catch (error) {
    res.status(500).json({message:"something went wrong",error:error.message})
    console.log(error);
}
})

router.patch("/:id",async (req,res)=>{
    try {
        const student=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json(student)
    } catch (error) {
        res.status(500).json({message:"something went wrong",error:error.message})
        console.log(error);        
    }
})

router.delete("/:id",async (req,res)=>{
    console.log("delete req")
    try {
        const student=await Student.findByIdAndDelete(req.params.id)
        res.status(201).json({message:"succesfully deleted"})
    } catch (error) {
        res.status(500).json({message:"something went wrong",error:error.message})
        console.log(error);        
    }
})
module.exports=router
