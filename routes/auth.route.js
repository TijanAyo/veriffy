const express = require('express')
const router = express.Router()
const {register, login } = require('../controllers/auth.controller')

// @desc: Register Route
// @route: GET /account/register
router.get('/account/register', (req, res)=>{
    res.render('../views/index.ejs')
})

// @desc: Register Route
// @route: POST /account/register
router.post('/account/register', register)


// @desc: Register Route
// @route: GET /account/login
router.get('/account/login', (req, res)=>{
    res.render('../views/login.ejs')
})

// @desc: Login Route
// @route: POST /account/login
router.post('/account/login', login)



module.exports = router