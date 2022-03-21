const express = require('express')
const app = express()

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

const PORT = 3000 || process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Running server on port ${PORT}`)
})