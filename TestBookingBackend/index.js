import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import hotelRoute from './routes/hotels.js'
import roomRoute from './routes/rooms.js'


const app = express()



import https from 'https'
// var https = require('https');
const server = https.createServer(app);


dotenv.config()


app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });



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
app.use(bodyParser.json());

app.use(express.urlencoded({extended:true}))
//app.use(bodyParser.urlencoded({extended : false}));

app.use(express.json());



app.post('/api/hotel',(req, res) => {
  
    console.log(req.body);
    console.log('hello');
    res.status(200).send("Recorded succesfully");
  })
  
// app.use(express.json())

// app.use("/api/auth",authRoute)
// app.use("/api/hotel",hotelRoute)
// app.use("/api/user", userRoute)
// app.use("/api/room", roomRoute)

mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})
mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected")
})




app.listen(8000,() =>{
    connect()
    console.log("Connected to backend")
})