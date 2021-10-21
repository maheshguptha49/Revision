const mongoose=require('mongoose')

const commentSchema=mongoose.Schema({
    author: {type:String, required:true},
    body: {type:String, required:true},
    timestamp:{type:String, required:false,default:"15 hours ago"},
    points: {type:String, required:false,default:`${Math.floor(Math.random()*20)}`},
    replies:{type:Array, required:true},
    id: {type:Number, required:true}
})
const Comment=mongoose.model("comment",commentSchema)
module.exports=Comment