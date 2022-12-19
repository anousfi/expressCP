const mongoose=require('mongoose')

const User=mongoose.Schema({

    lastname:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    connections:{
        type:Number
    }

})
const UserModel=mongoose.model('users',User)

module.exports=UserModel
