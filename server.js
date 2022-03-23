const express = require('express')
const app = express()
const ConnectDB = require('./config/db')

require('dotenv').config()

// middleware
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'))


app.get('/', (req, res)=>{
    res.redirect('/account/login')
})

// routes
const authRoute = require('./routes/auth.route')

// using routes
app.use(authRoute);

// connect DB
ConnectDB()

app.listen(process.env.PORT || 5000)