import Hotel from "../models/Hotel.js"

// CREATE NEW HOTEL

export const createHotel = async (req,res,next) =>{

// const newHotel = new Hotel(req.body)
try{
    const newHotel = new Hotel(req.body)
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
}
catch(err){
    next(err)
}
}


//UPDATE NEW HOTEL
export const updatedHotel = async (req,res,next) =>{
try{
const updteHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body } , {new :true} )
res.status(200).json(updteHotel)
}catch(err){
    next(err)
}


}



// GET A HOTEL
export const AHotel = async (req,res,next) =>{

    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(err){
        next(err)
    }
}


//GET ALL HOTELS
export const AllHotels = async (req,res,next) =>{
try{
    const hotels = await Hotel.find();
    res.status(200).json(hotels)
}catch(err){
    next(err)
}
}

//DELETE A HOTEL
export const deletedHotel = async (req,res,next) =>{
    try{
await Hotel.findByIdAndDelete(req.body.params)
res.send("Hotel has been deleted")
    }catch(err){
        next(err)
    }
}