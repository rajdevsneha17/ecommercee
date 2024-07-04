// const express=require("express")
// const app=express()
// const PORT=process.env.PORT||7000
// const cors = require('cors');
// app.use(cors({
//     origin: ['https://ecommercee.vercel.app'],    
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials:true
// }));
// // Middleware to handle CORS preflight requests
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://ecommercee.vercel.app');
//     res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     if (req.method === 'OPTIONS') {
//         return res.sendStatus(200);
//     }
//     next();
// });
// app.use(express.json())

// const routes=require("./routes/sendmail")
// app.use("/api/v1",routes)

// app.listen(PORT,()=>{
// console.log(`successfully chal reha at ${PORT}`)
// })

// const dbconnect=require("./config/database")
// dbconnect();

// app.get("/",(req,res)=>{
//     res.send("running")
// })

const express = require('express');
const cors = require('cors');
const routes = require('./routes/sendmail');
const dbconnect = require('./config/database');

const app = express();
const PORT = process.env.PORT || 7000;

// Configure CORS to allow requests from your frontend
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Middleware to handle CORS preflight requests
app.options('*', cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());

// Use routes
app.use('/api/v1', routes);

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});

// Connect to the database
dbconnect();

app.get('/', (req, res) => {
    res.send('running');
});
