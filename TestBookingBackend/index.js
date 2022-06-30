// import express from "express"
// import bodyParser from "body-parser"
// import dotenv from "dotenv"
// import mongoose from "mongoose"
// import authRoute from './routes/auth.js'
// import userRoute from './routes/users.js'
// import hotelRoute from './routes/hotels.js'
// import roomRoute from './routes/rooms.js'


// const app = express()



// import https from 'https'
// // var https = require('https');
// // const server = https.createServer(app);
// app.use(bodyParser.json());


// dotenv.config()






// const connect = async () =>{

//     try{

// await mongoose.connect(process.env.MONGO),{
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopologyL: true,
//     useFindAndModify: false
// }
// console.log("Connected to mongodb")
//     }catch(err){
//         throw err;

//     }
// }

// //Middleware


// // app.use(express.urlencoded({extended:true}))
// // //app.use(bodyParser.urlencoded({extended : false}));

// // app.use(express.json());



// app.post('/api/hotel',(req, res) => {
  
//     console.log(req.body);
//     console.log('hello');
//     res.status(200).send("Recorded succesfully");
//   })
  
// // app.use(express.json())

// // app.use("/api/auth",authRoute)
// // app.use("/api/hotel",hotelRoute)
// // app.use("/api/user", userRoute)
// // app.use("/api/room", roomRoute)

// mongoose.connection.on("connected",()=>{
//     console.log("mongodb connected")
// })
// mongoose.connection.on("disconnected",()=>{
//     console.log("mongodb disconnected")
// })




// app.listen(8000,() =>{
//     connect()
//     console.log("Connected to backend")
// })



















import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import http from 'http'
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import hotelRoute from './routes/hotels.js'
import roomRoute from './routes/rooms.js'

var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

app.post('/api/hotel',(req, res) => {

    console.log(req.body);
    // const {nameId} = req.body;
    // console.log(nameId);
    console.log('hello');
    res.status(200).send("Recorded succesfully");
  })
  
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});