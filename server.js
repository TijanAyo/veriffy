const express = require('express')
const app = express()
const ConnectDB = require('./config/db')

require('dotenv').config()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/status', (req, res)=>{
    res.json({message: 'API working okay'})
})

// routes
const authRoute = require('./routes/auth.route')

// using routes
app.use(authRoute);

// connect DB
ConnectDB()

app.listen(process.env.PORT || 3000)