import User from '../models/User.js'
import bcrypt from "bcryptjs"
import { createError } from '../utils/errors.js';



export const register = async (req, res, next) => {

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        // Store hash in your password DB.

        const newuser = new User({

            username: req.body.username,
            email: req.body.email,

            password: hash


        })

        await newuser.save()
        res.status(201).send("New User has been created")

    } catch (err) {
        next(err)
    }



}


export const login = async (req, res, next) => {

    try {
        // Searching the user
        const user = await User.findOne({username:req.body.username})
        if(!user) return next(createError(404,"User not found"))


      const isPasswordCheck = await bcrypt.compare(req.body.password,user.password)
      if(!isPasswordCheck) return next(createError(400,"wrong password or username"))

      const {password,isAdmin,...otherDetails} =user._doc

      
        res.status(201).json({...otherDetails})

    } catch (err) {
        next(err)
    }



}