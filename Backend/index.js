const express=require("express")
const app=express()
const PORT=process.env.PORT||7000
const cors = require('cors');
app.use(cors({
    origin: ['https://ecommercee-d1yo6tcwl-snehas-projects-f4c33c0d.vercel.app'],    
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}));
// Middleware to handle CORS preflight requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://ecommercee-d1yo6tcwl-snehas-projects-f4c33c0d.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});
app.use(express.json())

const routes=require("./routes/sendmail")
app.use("/api/v1",routes)

app.listen(PORT,()=>{
console.log(`successfully chal reha at ${PORT}`)
})

const dbconnect=require("./config/database")
dbconnect();

app.get("/",(req,res)=>{
    res.send("running")
})