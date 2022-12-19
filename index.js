const express=require("express")

const cors=require("cors")

const app=express()

app.use(cors())

app.use(express.json())

const UserRouter=require('./APIS/user')

const UserRouter1=require('./APIS/task')

const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/tasks',()=>{console.log('connected successfully!!')}) 

app.use('/users',UserRouter)

app.use('/tasks',UserRouter1)

app.listen(9000,()=>console.log("server 9000 is running"))




