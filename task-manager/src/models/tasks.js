const mongoose=require('mongoose')
const validator = require('validator')

const Tasks = mongoose.model('Task',{
    description:{
        type:String,
        trim:true,
        required:true
    },
    isDone:{
        type:Boolean,
        default:false,

    }
})

module.exports = Tasks