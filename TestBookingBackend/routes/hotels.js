import express from "express"
import Hotel from "../models/Hotel.js";
const router = express.Router();




//CREATE

router.post("/", async (req,res,next)=>{

    // const { name, city, email, number } = req.body;
    // const employee=new Employee({ name, city, email, number })
    console.log("helo");
    console.log(req.body);
//         const {name} = req.body
// const newHotel = new Hotel({name});
// console.log("newHotel",newHotel)
// console.log(req.body);

//     try{
//         const savedHotel = await newHotel.save()
//         res.status(200).json(savedHotel)
//        // res.status(200).send("Recorded succesfully")

// }catch(err){
// res.status(500).json(err)
// }
// console.log(req.body)
next();

})


router.get('')




//UPDATE

// router.put("/",()=>{

// })

// //DELETE
// router.delete()
// //GET
// router.get('/',()=>{

// })

// //GETALL
// router.g











export default router