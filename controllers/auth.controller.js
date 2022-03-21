const User = require('../model/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const flash = require('express-flash')
const { redirect } = require('express/lib/response')

const register = async (req, res)=> {
    const {name, email, password} = req.body

    const userexist = await User.findOne({email})
    if (userexist){
        req.flash('error', 'User with this email already exist')
        res.status(400)
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, salt)

    const user = User.create({
        name,
        email,
        password: hashedpassword
    })

    if(user){
        req.flash('info', 'Account Created')
        //res.status(201).send({message: 'Created', AccessToken: generateToken(user.id)})
        return redirect('/account/login')
    }
    req.flash('error', 'User already exist')
    //res.status(400).send({message: 'Bad Request...', error: 'User already exist'})
    return res.render('../views/index.ejs')
}

const login = async (req, res)=>{
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        // return res.status(200).json({message: 'User logged in'})
        return res.render('../views/dashboard.ejs')
    }
    return res.render('../views/login.ejs')
    // return res.status(401).render('Unauthorized')
}


const generateToken = (id)=>{
    return jwt.sign({id}, process.env.SECRET_TOKEN, {expiresIn: '24h'})
}

module.exports = {
    register, login
}