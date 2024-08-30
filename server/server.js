require("dotenv").config()

const express=require('express')
const cors = require('cors');
const mongoose=require('mongoose')
const projectsroutes=require('./routes/projects')
const fundsroutes=require('./routes/funds')
const costsroutes=require('./routes/costs')

//express app
const app=express()



//middleware
app.use(cors());
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/projects',projectsroutes)
app.use('/api/funds',fundsroutes)
app.use('/api/costs',costsroutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("connected to db and listening on port ", process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})


