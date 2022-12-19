const mongoose=require('mongoose')

const Tasks=mongoose.Schema(
       {
        todo:{
            type:String,
            required:true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'users',
            required:true
        }
    }
)

const TasksModel=mongoose.model('tasks',Tasks)

module.exports=TasksModel