const router=require("express")

const task=require('../modules/tasks')

const router1=router()

router1.get('/:user',async (req,res)=>{
    const newUser=req.params.user
    try {
        let result = await task.find({username:newUser})
        if (result) {
            res.send(result)
        } else {
            res.send('no tasks yet!!!')
        }
    } catch (err) {
        console.log(err.message)
    }
})
router1.post('/:user',async (req,res)=>{
    const newelement=req.params.user
    const newelement1=req.body.task
    console.log(newelement1)
    const newtask=new task({todo:newelement1,user:newelement})
    try {
        const saved=await newtask.save()
        console.log(saved)
        if (saved) {
            res.send(saved)
        } else {
            res.send(err)
        }
    } catch (err) {
        console.log(err.message)
    }
})
router1.delete('/:user/delete/:todo',async(req,res)=>{
    const elementtodel=req.params.todo
    const userOperating=req.params.user
    const taskToDel=new task({todo:elementtodel,user:userOperating})
    try {
        await task.deleteOne({todo:elementtodel,id:userOperating})
        res.send(taskToDel)
        console.log(userOperating)
        } catch (err) {
        console.log(err.message)
    }
})

module.exports=router1