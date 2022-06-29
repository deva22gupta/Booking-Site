import mongoose from "mongoose";
//const {Schema} = mongoose

const HotelSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
        
     
    },
//     type:{
//         type:String,
     
//     },
//     city:{
//         type:String,
       
//     },
//     address:{
//         type:String,
       
//     },
//     distance:{
//         type:String,
      
//     },
//     // photos:{
//     //     type:[String],
        
//     // },
//     title:{
//         type:String,
       
//     },
//     desc:{
//         type: String,
       
//     },
   
//     rating:{
//         type: Number,
//      min:0,
//      max:5
//     },
//     // rooms:{
//     //     type:[String]
        
//     // },
// // for showing cheapest hotels
//     cheapestPrice:{
//         type:Number,
       
//     },

//     // for showing featured hotels
//     // featured:{
//     //     type:Boolean,
//     //     default:false,
//     // }



})


export default mongoose.model("Hotel",HotelSchema)