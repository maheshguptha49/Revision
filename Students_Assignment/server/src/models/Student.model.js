const mongoose=require('mongoose')
    // name age gender city
const studentSchema=mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    gender:{type:String, required:true},
    city:{type:String, required:true}
})
const Student=mongoose.model("student",studentSchema)
module.exports = Student