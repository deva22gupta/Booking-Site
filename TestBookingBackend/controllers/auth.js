import User from '../models/User.js'



export const register = async (req,res,next) =>{

    const newuser = new User({

        username : req.body.username,
        email: req.body.email,
        password:req.body.password
        

    })

try{
   await newuser.save()
   res.status(201).send("New User has been created")

}catch(err){
    next(err)
}



}