import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import hotelRoute from './routes/hotels.js'
import roomRoute from './routes/rooms.js'


const app = express()




app.use(bodyParser.json());


dotenv.config()






const connect = async () =>{

    try{

await mongoose.connect(process.env.MONGO),{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopologyL: true,
    useFindAndModify: false
}
console.log("Connected to mongodb")
    }catch(err){
        throw err;

    }
}

//Middleware




// app.use((req,res,next)=>{
//     console.log("Hello I am a miidleware")
//   //   res.send("Sending a response from middle ware")    // here if you won't send with return keyword your app will get crashed so we have to write return next()
// next();
// } )

// app.post('/api/hotel',(req, res) => {
  
//     // console.log(req.body);
//     // console.log('hello');
//     // res.status(200).send("Recorded succesfully");
//   })
  
// app.use(express.json())

 app.use("/api/auth",authRoute)
app.use("/api/hotel",hotelRoute)
// app.use("/api/user", userRoute)
// app.use("/api/room", roomRoute)



mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})
mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected")
})



// handling the error after calling the hotel api
// here the hotel rote is directlr the error to this middleware

app.use((err,req,res,next)=>{
   
    //you cangive your own error status and error message
    const errorstatus = err.status || 500
    const errmsg = err.message || "Somethoing went wrong!!"


  //  return res.status(errorstatus).json("Hello error from handler") 
  // you can customize this to send more information

   return res.status(errorstatus).json({
    success:false,
    status : errorstatus,
    message:errmsg,
    stack:err.stack
   })


})

console.log("outside of the middleware");


app.listen(8000,() =>{
    connect()
    console.log("Connected to backend")
})

















