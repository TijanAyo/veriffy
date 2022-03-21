const express = require('express')
const router = express.Router()
const {register, login } = require('../controllers/auth.controller')

// @desc: Register Route
// @route: POST /signup
router.post('/account/register', register)


// @desc: Login Route
// @route: POST /signin
router.post('/account/login', login)

module.exports = router