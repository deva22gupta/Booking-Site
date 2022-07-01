import express from "express"
import { AHotel, AllHotels, createHotel, deletedHotel, updatedHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/errors.js";
const router = express.Router();




//CREATE

// router.post("/", async (req, res, next) => {



//     const newHotel = new Hotel(req.body);

// shifting everything to controllers
//     try {
//         const savedHotel = await newHotel.save()
//         res.status(200).json(savedHotel)
//         // res.status(200).send("Recorded succesfully")

//     } catch (err) {
//         res.status(500).json(err)
//     }
//     // console.log(req.body)
//     next();

// })

router.post("/",createHotel)
router.put("/:id",updatedHotel)
router.get("/:id",AHotel)
router.get("/",AllHotels)
router.delete("/:id",deletedHotel)




// router.get('')




//UPDATE

// router.put("/:id", async (req, res, next) => {


//     try {
//         const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
//         res.status(200).json(updatedHotel)
//         // res.status(200).send("Recorded succesfully")

//     } catch (err) {
//         res.status(500).json(err)
//     }
//     // console.log(req.body)
//     next();

// })
// //DELETE

// router.delete("/:id", async (req, res, next) => {


//     try {

//        await Hotel.findByIdAndDelete(req.params.id)
//         res.status(200).json("hote has been deeted")
//         // res.status(200).send("Recorded succesfully")

//     } catch (err) {
//         res.status(500).json(err)
//     }
//     // console.log(req.body)
//     next();

// })



// // router.delete()
// // //GET

// router.get("/:id", async (req, res, next) => {

//     console.log("You are getting a hotel");
//  // return  next()  // due to this get the response returned is null when the prev middleware one is after this and app crashed when we use res.send()

//     try {
//         const hotel = await Hotel.findById(req.params.id)
//         res.status(200).json(hotel)
//         // res.status(200).send("Recorded succesfully")
//         console.log("Its inside the try block");

//     } catch (err) {
//         res.status(500).json(err)
//         console.log("Its from the catch block");
//     }
//     // console.log(req.body)
//   return  next();

// })




// // router.get('/',()=>{

// // })

// // //GETALL


// router.get("/", async (req, res, next) => {

//   // if you are doing any previous operation and it failed before reaching try and catch for that here we can give like that

// //   const failed = true

//   // You are not going to give this every time so instaed store it in a separate utils folder in just exporting an error function nothing else

// //   const error = new Error();
// //    error.status = 404
// //    error.message = "Went wrong earlier can not reach try and catch"

//   // applying the condition  if failed then move to next middleware otherwise you can proceed with try and catch
// //   if(failed) return next(createError(401,"You are not authenticated"))
  

//     try {
//         const hotels = await Hotel.find()
//         res.status(200).json(hotels)
//         // res.status(200).send("Recorded succesfully")

//     } catch (err) {
//        // res.status(500).json(err)
//        next(err)
//     }
//     // console.log(req.body)
//     next();

// })



// router.g











export default router