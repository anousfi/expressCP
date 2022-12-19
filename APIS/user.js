const {Router}=require('express')

const router=Router()

const User=require('../modules/User')

router.post('/signup', async (req,res)=>{
    const lastname=req.body.Lname
    const firstname=req.body.Fname
    const email=req.body.email
    const user=req.body.username
    const password=req.body.password
    try {
        let result=await User.findOne({username:user})
        if (result) {
            res.send('username already existing!!')
        } else {
            const newUser=new User({lastname,firstname,email,username,password})
            User.insertOne(newUser)
            const saved =await newUser.save()
            console.log(newUser)
            if (saved) {
                res.send('username created!!')
            } else {
                res.send(err)
            }
        }

    } catch (err) {
        console.log(err.message)
    }
})

router.post('/signin', async (req,res)=>{
    const user=req.body.user
    const password=req.body.password
    try {
        let result=await User.findOne({username:user}) 
        if (result) {
            if (password===result.password) {
                res.send(result)
            } else {
                res.send('wrong password!!')
            }
        } else {
            res.send("this username doesn't exist")
        }
    } catch (err) {
        console.log(err.message)
    }
})

router.get('/selectuser/:user',(req,res)=>{
    const subject=req.params.user
    res.send([...tasks.filter(element=>element.user===subject)])
})

module.exports=router