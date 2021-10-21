const {Router}=require('express')
const Comment = require('../models/comment.model')

const router=Router()

router.get("/",async(req,res)=>{
    const data=await Comment.find().lean().exec()
    res.status(200).json(data)
})
router.post("/",async(req,res)=>{
    try {
        const {parentCommentId,commentData}=req.body
      let reply= await insertComment(parentCommentId,commentData)
      res.status(201).json({reply: reply})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

module.exports=router

async function insertComment(parentCommentId,commentData){
    const comments=await Comment.find().lean().exec()
    function solve(comment){
        // console.log(comment.id)
        if(comment.id===parentCommentId){
            comment.replies===undefined?comment.replies=[]:comment.replies
            comment.replies.push(commentData)
            return true
        }
        
        let data=comment?.replies
        if(data===undefined){return false}
        for(let i=0;i<data.length;i++){
            if(solve(data[i])===true){
                return true
            }
            
        }
        return false
    }
    solve(comments[0])
    await Comment.findByIdAndUpdate("617195e91f121533ea9737af",comments[0])
    return comments
}
