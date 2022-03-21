const register = (req, res)=> {
    res.json({message: 'Signup Route'})
}

const login = (req, res)=>{
    res.json({message: 'Signin Route'})
}

module.exports = {
    register, login
}